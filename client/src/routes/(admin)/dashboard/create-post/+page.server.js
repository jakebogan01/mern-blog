import { fail } from '@sveltejs/kit';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "$lib/firebase.js";
/** @type {import('./$types').Actions} */
export const actions = {
    createPost: async ({ fetch, request }) => {
        try {
            const data = await request.formData();
            const title = data.get('title');
            const category = data.get('category');
            const file = data.get('file');
            const content = data.get('content');

            const fileName = new Date().getTime() + file.name;
            const storage = getStorage(app);
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            let image;

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
                            image = downloadURL;
                            resolve();
                        }).catch(reject);
                    }
                );
            });

            const response = await fetch(`/api/post/create-post`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, category, image, content }),
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
    }
};