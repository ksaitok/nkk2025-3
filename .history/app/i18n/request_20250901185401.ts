import { getRequestConfig } from 'next-intl/server'

// @ts-ignore
export default getRequestConfig(async ({ locale }) => {
  const messages = (await import(`../messages/${locale}.json`)).default
  return { messages }
})
