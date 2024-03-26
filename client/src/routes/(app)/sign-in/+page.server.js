import { fail  } from '@sveltejs/kit';
/** @type {import('./$types').Actions} */
export const actions = {
        login: async ({ fetch, request }) => {
                const data = await request.formData();
                const email = data.get('email').trim();
                const password = data.get('password').trim();

                if (!email || !password) {
                        let emptyFields = {
                                email: !email ? "Email is required" : "",
                                password: !password ? "Password is required" : "",
                        };
                        return fail(400, { emptyFields });
                }

                const response = await fetch(`/api/auth/signin`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email, password }),
                });

                return {
                        success: true,
                        responseData: await response.json(),
                };
        }
};
