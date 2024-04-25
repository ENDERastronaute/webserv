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

    console.log(data);
    
    
    const app = applicationsManager.updateInstance(data);
    
    return NextResponse.json(app);
}