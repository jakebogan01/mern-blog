import { fail  } from '@sveltejs/kit';
/** @type {import('./$types').Actions} */
export const actions = {
        register: async ({ fetch, request }) => {
                const data = await request.formData();
                const email = data.get('email').trim();
                const username = data.get('username').trim();
                const password = data.get('password').trim();

                if (!username || !email || !password) {
                        let emptyFields = {
                                username: !username ? "Username is required" : "",
                                email: !email ? "Email is required" : "",
                                password: !password ? "Password is required" : "",
                        };
                        return fail(400, { emptyFields });
                }

                const response = await fetch(`/api/auth/signup`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ username, email, password }),
                });

                return {
                        success: true,
                        responseData: await response.json(),
                };
        }
};
