import { client } from '$lib/sanity/client';
import { siteSettingsQuery } from '$lib/sanity/queries';

export async function load() {
	const siteSettings = await client.fetch(siteSettingsQuery);

	return {
		siteSettings
	};
}
