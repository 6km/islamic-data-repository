export async function load({ fetch }) {
	const response = await fetch('/licenses/oss-licenses.json');
	if (!response.ok) return { licenses: [] };

	return { licenses: await response.json() };
}
