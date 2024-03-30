import { fail  } from '@sveltejs/kit';
/** @type {import('./$types').Actions} */
export const actions = {
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
