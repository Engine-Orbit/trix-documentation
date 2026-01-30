import { NextResponse } from "next/server";
import { buildSearchIndex } from "@/lib/search";

export async function GET() {
    const items = buildSearchIndex();
    return NextResponse.json(items);
}
