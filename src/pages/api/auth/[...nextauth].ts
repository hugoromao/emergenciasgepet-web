/* eslint-disable @typescript-eslint/no-non-null-assertion */
import NextAuth, { NextAuthOptions, User } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import api from 'services/api'

type Credentials = {
  identifier: string
  password: string
}

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  pages: {
    signIn: '/signIn'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials) {
        const { identifier, password } = credentials as Credentials

        try {
          const { data } = await api.post<User>('/auth/local', {
            identifier,
            password
          })

          return data.user as Omit<User, 'id'>
        } catch (err) {
          return null
        }
      }
    })
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === 'google') {
        console.log(account, profile)
      }
      return true // Do different verification for other providers that don't have `email_verified`
    }
  }
}
export default NextAuth(authOptions)
