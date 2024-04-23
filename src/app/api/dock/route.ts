import dock from "@utils/files/dock";
import { NextResponse } from "next/server";

export async function GET() {
    const apps = dock.apps;

    return NextResponse.json(apps);
}