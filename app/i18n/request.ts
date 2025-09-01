import { getRequestConfig } from 'next-intl/server'

// @ts-expect-error - Type mismatch in next-intl RequestConfig, but runtime works correctly
export default getRequestConfig(async ({ locale }) => {
  const messages = (await import(`./messages/${locale}.json`)).default
  return { messages }
})
