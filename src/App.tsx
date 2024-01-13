import { createResource } from 'solid-js';

interface ShortLinkListItem {
	name: string;
	expiration: number;
}

const fetchShortLinks = async () => {
	const res = await fetch('https://short-it.movelabs.workers.dev/api/links');
	const data = await res.json();
	console.log(data);
	return data;
};

function ListPage() {
	const [shortLinkKeys] = createResource<ShortLinkListItem[]>(fetchShortLinks);

	return (
		<>
			<div class="w-full h-full flex flex-row p-10">
				<h1 class="text-3xl font-bold underline">Testando</h1>
			</div>
			<p>
				{shortLinkKeys.loading
					? 'Carregando...'
					: shortLinkKeys()
							?.map((link) => link.name)
							.join(', ')}
			</p>
		</>
	);
}

export default ListPage;
