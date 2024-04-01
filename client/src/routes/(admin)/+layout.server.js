/** @type {import('./$types').LayoutServerLoad} */
export async function load({ fetch, setHeaders, url }) {
        let tab = url.searchParams.get('tab');

        return {
                data: tab
        };
}