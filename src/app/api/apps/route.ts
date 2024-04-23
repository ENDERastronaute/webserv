import applicationsManager from "@utils/files/applications";
import { App, AppInstance } from "$types";
import Config from "@/lib/utils/files/config";
import FileManager from "@/lib/utils/files/fileManager";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const applicationsNames: string[] = await Config.cfg.applications;
    let applications: App[] = []

    applicationsNames.forEach(app => {
        applications.push(applicationsManager.get(app));
    });
    
    return NextResponse.json(applications);
}

export async function PATCH(req: NextRequest) {
    const body = await req.json();
    const data: AppInstance = body.data;
    const id: number = body.id;
    
    const app = applicationsManager.updateInstance(data.name, id, data);
    
    return NextResponse.json(app);
}

export async function PUT(req: NextRequest) {
    const body = await req.json();
    const name: string = body.name;

    const image = await FileManager.get('appIcon', name);

    const headers = new Headers();
    
    headers.set("Content-Type", "image/*");

    return new NextResponse(image, { status: 200, headers: headers });
}