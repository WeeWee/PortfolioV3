import * as crypto from "crypto";

const WEBHOOK_SECRET: string = process.env.GITHUB_WEBHOOK_SECRET!;

export const verify_signature = async (req: Request, data: any) => {
	const signature = crypto
		.createHmac("sha256", WEBHOOK_SECRET)
		.update(JSON.stringify(data))
		.digest("hex");
	let trusted = Buffer.from(`sha256=${signature}`, "ascii");
	let untrusted = Buffer.from(req.headers.get("X-Hub-Signature-256")!, "ascii");
	return crypto.timingSafeEqual(trusted, untrusted);
};
