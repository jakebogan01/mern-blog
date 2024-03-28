import { redirect } from '@sveltejs/kit';

export async function load({ fetch, setHeaders, url }) {
        let tab = url.searchParams.get('tab');

        return {
                data: tab
        };
}