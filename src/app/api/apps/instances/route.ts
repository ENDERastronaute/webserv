import { AppInstance } from "@/lib/types";
import applicationsManager from "@/lib/utils/files/applications";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const name: string = body.name;

    return NextResponse.json(applicationsManager.get(name).instances);
}

export async function PUT(req: NextRequest) {
    const body = await req.json();
    const name: string = body.name;

    return NextResponse.json(await applicationsManager.addInstance(name));
}

export async function DELETE(req: NextRequest) {
    const body = await req.json();
    const instance: AppInstance = body.instance;

    await applicationsManager.removeInstance(instance)

    return NextResponse.json(true);
}