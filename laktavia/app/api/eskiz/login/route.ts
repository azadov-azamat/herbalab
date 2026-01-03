import { eskizLogin } from "@/lib/eskiz"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const token = await eskizLogin()
    return NextResponse.json({ success: true, token })
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message }, { status: 500 })
  }
}

// added comment about this file