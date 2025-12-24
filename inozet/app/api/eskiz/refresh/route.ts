import { NextResponse } from "next/server"
import { eskizRefresh } from "@/lib/eskiz"

export async function GET() {
  try {
    const token = await eskizRefresh()
    return NextResponse.json({ success: true, token })
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message }, { status: 500 })
  }
}
