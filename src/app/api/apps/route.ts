import applicationsManager from "@utils/files/applications";
import { App, AppInstance } from "$types";
import Config from "@/lib/utils/files/config";
import FileManager from "@/lib/utils/files/fileManager";
import { NextRequest, NextResponse } from "next/server";
import { readdir } from "fs/promises";

export async function GET() {
    const applicationsNames: string[] = await readdir('./apps');
    let applications: App[] = []

    applicationsNames.forEach(app => {
        applications.push(applicationsManager.get(app));
    });
    
    return NextResponse.json(applications);
}

export async function PATCH(req: NextRequest) {
    const body = await req.json();
    const data: AppInstance = body.data;

    const app = applicationsManager.updateInstance(data);
    
    return NextResponse.json(app);
}