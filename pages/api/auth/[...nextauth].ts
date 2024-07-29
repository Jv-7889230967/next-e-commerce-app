import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId:<string> process.env.GITHUB_CLIENT_ID,
      clientSecret:<string> process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
}

export default NextAuth(authOptions)