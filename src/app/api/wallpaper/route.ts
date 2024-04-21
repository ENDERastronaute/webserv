
import { NextRequest, NextResponse } from "next/server";
import WallpapersManager from "@/lib/utils/files/wallpapers";

export async function GET() {
    return NextResponse.json({ wallpaper: await WallpapersManager.getUsedWallpaper()});
}

export async function PATCH(req: NextRequest) {
    const body = await req.json();
    const wallpaper = body.wallpaper;

    await WallpapersManager.setWallpaper(wallpaper);

    return NextResponse.json({ wallpaper: await WallpapersManager.getUsedWallpaper() })
}

export async function PUT() {
    const wallpapers = WallpapersManager.wallpapers;
    
    return NextResponse.json({ wallpapers: wallpapers });
}