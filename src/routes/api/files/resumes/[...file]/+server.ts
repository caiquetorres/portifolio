import path from 'node:path';
import fs from 'node:fs/promises';

export async function GET({ params }: { params: { file: string } }): Promise<Response> {
	try {
		const file = await fs.readFile(path.resolve('static', params.file));
		return new Response(file, {
			headers: { 'Content-Type': 'application/pdf' }
		});
	} catch {
		const body = JSON.stringify({
			status: 404,
			message: 'File not found'
		});
		return new Response(body, {
			status: 404,
			headers: { 'Content-Type': 'application/json' }
		});
	}
}
