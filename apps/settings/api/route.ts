import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: "les routes custom fonctionnent !!!! (j'ai chié du sang.)" })
}