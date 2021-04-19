import {promises as fs} from "fs";

export async function get() {
	const asset = await fs.readFile("sample.jpg");
	return {
		headers: {
			"Content-Type": "image/jpeg"
		},
		body: asset
	};
}
