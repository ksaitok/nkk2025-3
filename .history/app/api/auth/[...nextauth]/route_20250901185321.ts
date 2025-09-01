import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        })
        if (!user || !user.password) return null
        const isValid = await bcrypt.compare(credentials.password, user.password)
        if (!isValid) return null
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          isAdmin: user.isAdmin
        }
      }
    })
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.isAdmin = user.isAdmin
      }
      return token
    },
    session({ session, token }) {
      if (session.user) {
        session.user.isAdmin = token.isAdmin as boolean
      }
      return session
    }
  },
  pages: {
    signIn: '/admin/login'
  }
})

export { handlers as GET, handlers as POST }
