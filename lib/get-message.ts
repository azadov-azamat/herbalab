// lib/getMessage.ts

type Lang = "uz" | "ru" | "en"

interface GetMessageOptions {
  name: string
  phone: string
  lang?: Lang
}

export function getMessage({ name, phone, lang = "uz" }: GetMessageOptions): string {
  switch (lang) {
    case "ru":
      return (
        `Новая заявка с сайта HERBALAB.\n\n` +
        `Имя: ${name}\n` +
        `Телефон: ${phone}\n\n` +
        `Пожалуйста, свяжитесь с клиентом в ближайшее время.`
      )

    case "en":
      return (
        `New request from the HERBALAB website.\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n\n` +
        `Please contact the client as soon as possible.`
      )

    case "uz":
    default:
      return (
        `HERBALAB saytida yangi murojaat.\n\n` +
        `Ism: ${name}\n` +
        `Telefon: ${phone}\n\n` +
        `Iltimos, mijoz bilan imkon qadar tezroq bog'laning.`
      )
  }
}
