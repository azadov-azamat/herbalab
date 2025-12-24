import { NextResponse } from "next/server"
import { sendSMS } from "@/lib/eskiz"
import { getMessage } from "@/lib/get-message"

export async function POST(req: Request) {
  try {
    const { name, phone } = await req.json()

    if (!phone) {
      return NextResponse.json({ success: false, message: "Phone required" }, { status: 400 })
    }

    const text = getMessage({ name, phone, lang: "uz" })

    const result = await sendSMS(phone, text)

    return NextResponse.json({
      success: true,
      eskiz: result
    })

  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message }, { status: 500 })
  }
}
