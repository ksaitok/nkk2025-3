import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'ja', 'pt'],
  defaultLocale: 'ja'
})

export const config = {
  matcher: ['/', '/(ja|en|pt)/:path*']
}
