
import { NextRequest, NextResponse } from "next/server";
import WallpapersManager from "@/lib/utils/files/wallpapers";

export async function GET() {
    return NextResponse.json({ wallpaper: await WallpapersManager.manager.getUsedWallpaper()});
}

export async function PATCH(req: NextRequest) {
    const body = await req.json();
    const wallpaper = body.wallpaper;

    await WallpapersManager.manager.setWallpaper(wallpaper);

    return NextResponse.json({ wallpaper: await WallpapersManager.manager.getUsedWallpaper() })
}

export async function PUT() {
    const wallpapers = WallpapersManager.manager.wallpapers;
    
    return NextResponse.json({ wallpapers: wallpapers });
}