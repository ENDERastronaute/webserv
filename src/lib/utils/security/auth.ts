import { NextRequest } from "next/server";
import { verify } from "./jwt";

export async function isAuthenticated(request: NextRequest): Promise<boolean> {
    const cookie = request.cookies.get('id')?.value;

    if (!cookie) {
        return false;
    }

    const payload = await verify(cookie);

    return payload !== undefined && (payload.payload as any).id === process.env.ID;
}