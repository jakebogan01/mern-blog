import { redirect } from '@sveltejs/kit';

export async function load({ fetch, setHeaders, url }) {
        let tab = url.searchParams.get('tab');

        if (!tab) {
                redirect(307, '/sign-in');
        }

        return {
                data: tab
        };
}