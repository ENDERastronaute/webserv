import FileManager from "@/lib/utils/files/fileManager";
import { NextRequest, NextResponse } from "next/server";

type Params = {
    name: string
}

export async function GET(req: NextRequest, context: { params: Params }) {
    const name = context.params.name;

    const { imageName, image } = await FileManager.get('appIcon', name);

    let contentType = 'image/*';

    if (imageName.endsWith('.svg')) {
        contentType = 'image/svg+xml';
    } else if (imageName.endsWith('.png')) {
        contentType = 'image/png';
    } else if (imageName.endsWith('.jpg') || name.endsWith('.jpeg')) {
        contentType = 'image/jpeg';
    }

    const headers = new Headers();

    headers.set("Content-Type", contentType);

    return new NextResponse(image, { status: 200, headers: headers });
}