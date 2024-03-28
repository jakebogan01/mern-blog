import { fail  } from '@sveltejs/kit';
/** @type {import('./$types').Actions} */
export const actions = {
        updateUserProfile: async ({ fetch, request }) => {
                const data = await request.formData();
                const userId = data.get('userid');
                const username = data.get('username').trim();
                const email = data.get('email').trim();
                const password = data.get('password');

                if (!username && !email && !password) {
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
        }
};
