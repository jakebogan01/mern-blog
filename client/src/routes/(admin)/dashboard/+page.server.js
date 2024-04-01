import { fail, error, redirect} from '@sveltejs/kit';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "$lib/firebase.js";

/** @type {import('./$types').LayoutServerLoad} */
export const load = async ({ fetch, setHeaders, cookies }) => {
        const cookie = cookies.get('access_token');
        if (!cookie) {
                return redirect(301, '/sign-in?unauthorized=true');
        }

        const userId = cookie ? JSON.parse(atob(cookie.split('.')[1])).id : null;

        try {
                const response = await fetch(`/api/post/getposts?userId=${userId}`);

                if (!response.ok) {
                        error(401 ,"Failed to fetch posts");
                }

                // setHeaders({
                //         age: response.headers.get('age'),
                //         'cache-control': response.headers.get('cache-control')
                // })

                const data = await response.json();

                const posts = data?.posts.map((post) => ({
                        id: post._id,
                        slug: post.slug,
                        title: post.title,
                        category: post.category,
                        content: post.content,
                        image: post.image,
                        updatedAt: post.updatedAt,
                }));

                return {
                        posts: posts
                };
        } catch (error) {
                console.error("Error fetching posts:", error);
                return fail(500, { message: "Internal Server Error" });
        }
};

/** @type {import('./$types').Actions} */
export const actions = {
        updateUserImage: async ({ fetch, request }) => {
                try {
                        const data = await request.formData();
                        const userId = data.get('userid');
                        const file = data.get('file');

                        const fileName = new Date().getTime() + file.name;
                        const storage = getStorage(app);
                        const storageRef = ref(storage, fileName);
                        const uploadTask = uploadBytesResumable(storageRef, file);

                        let profilePicture;

                        await new Promise((resolve, reject) => {
                                uploadTask.on(
                                    "state_changed",
                                    (snapshot) => {
                                            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                            console.log("Upload is " + progress + "% done");
                                    },
                                    (error) => {
                                            reject(fail(400, { message: error }));
                                    },
                                    () => {
                                            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                                                    profilePicture = downloadURL;
                                                    resolve();
                                            }).catch(reject);
                                    }
                                );
                        });

                        const response = await fetch(`/api/user/update/${userId}`, {
                                method: "PUT",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ profilePicture }),
                        });

                        const responseData = await response.json();

                        return {
                                success: true,
                                responseData: responseData,
                        };
                } catch (error) {
                        // Handle any errors here
                        console.error("Error creating post:", error);
                        return fail(500, { message: "Internal Server Error" });
                }
        },
        updateUserProfile: async ({ fetch, request }) => {
                const data = await request.formData();
                const userId = data.get('userid');
                const username = data.get('username').trim();
                const email = data.get('email').trim();
                const password = data.get('password');

                if (!username && !email && !password || !userId) {
                        return fail(400, { message: "Please fill in all fields" });
                }

                const response = await fetch(`/api/user/update/${userId}`, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ username, email, password }),
                });

                return {
                        success: true,
                        responseData: await response.json()
                };
        },
        deleteUser: async ({ fetch, request }) => {
                const data = await request.formData();
                const userId = data.get('userid');

                if (!userId) {
                        return fail(400, { message: "Invalid action" });
                }

                const response = await fetch(`/api/user/delete/${userId}`, {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" }
                });

                let responseData = await response.json();

                if (!responseData.delete) {
                        return fail(400, { message: "Invalid action" });
                }

                return {
                        delete: responseData.delete,
                        success: true,
                };
        },
        signoutUser: async ({ fetch}) => {
                const response = await fetch(`/api/user/signout`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" }
                });

                let responseData = await response.json();

                if (!responseData.logout) {
                        return fail(400, { message: "Invalid action" });
                }

                return {
                        logout: responseData.logout,
                        success: true,
                };
        }
};
