import { fail  } from '@sveltejs/kit';
/** @type {import('./$types').Actions} */
export const actions = {
        updateUserImage: async ({ fetch, request }) => {
                const data = await request.formData();
                const userId = data.get('userid');
                const profilePicture = data.get('profilePicture');

                if (!profilePicture || !userId) {
                        return fail(400, { message: "Invalid data" });
                }

                const response = await fetch(`/api/user/update/${userId}`, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ profilePicture }),
                });

                return {
                        success: true,
                        responseData: await response.json()
                };
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
