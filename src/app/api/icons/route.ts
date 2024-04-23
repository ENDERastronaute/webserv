import FileManager from "@/lib/utils/files/fileManager";
import iconsManager from "@/lib/utils/files/iconManager";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(iconsManager.icons);
}

export async function PATCH(req: NextRequest) {
    const body = await req.json();
    const { name, icon }: {name: string, icon: string} = body.data;
    
    const icons = iconsManager.icons;

    icons[name] = icon;

    await iconsManager.write();
    
    return NextResponse.json({ icon: icon });
}