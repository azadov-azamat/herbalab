// lib/eskiz.ts

let cachedToken: string | null = null
let tokenExpireTime: number | null = null

export async function eskizLogin() {
  const email = process.env.ESKIZ_EMAIL
  const password = process.env.ESKIZ_PASSWORD

  const res = await fetch("https://notify.eskiz.uz/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error("Eskiz login error: " + data.message)
  }

  cachedToken = data.data.token
  tokenExpireTime = Date.now() + data.data.expires * 1000

  return cachedToken
}

export async function eskizRefresh() {
  if (!cachedToken) return eskizLogin()

  const res = await fetch("https://notify.eskiz.uz/api/auth/refresh", {
    method: "PATCH",
    headers: {
      "Authorization": `Bearer ${cachedToken}`,
      "Content-Type": "application/json"
    }
  })

  const data = await res.json()

  if (!res.ok) {
    return eskizLogin() // fallback
  }

  cachedToken = data.token
  tokenExpireTime = Date.now() + 60 * 60 * 1000 // 1 hour

  return cachedToken
}

async function ensureToken() {
  if (!cachedToken || !tokenExpireTime || Date.now() > tokenExpireTime) {
    return await eskizLogin()
  }
  return cachedToken
}

export async function sendSMS(phone: string, text: string) {
  const token = await ensureToken()

  const cleanedPhone = phone.replace(/\D/g, "")

  const res = await fetch("https://notify.eskiz.uz/api/message/sms/send", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      mobile_phone: '998932052443', // admin phone number for testing
      message: text,
      from: '4546',
    //   callback_url: process.env.ESKIZ_CALLBACK_URL || null
    })
  })

  const data = await res.json()

  if (res.status === 401) {
    // token eskirgan bo‘lishi mumkin → qayta refresh
    await eskizRefresh()
    return await sendSMS(phone, text)
  }

  if (!res.ok) {
    console.log("Eskiz sendSMS error data:", data);
    throw new Error("Eskiz error: " + data.message)
  }

  return data
}
