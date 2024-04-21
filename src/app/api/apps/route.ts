import applicationsManager, { App } from "@/lib/utils/files/applications";
import Config from "@/lib/utils/files/config";
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
    const data: App = body.data;
    
    const app = applicationsManager.get(data.name);
    
    app.height = data.height;
    app.width = data.width;
    app.left = data.left;
    app.top = data.top;
    app.opened = data.opened;

    await applicationsManager.write();
    
    return NextResponse.json(app);
}