import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// Add this line to export authOptions as a named export
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // Add more providers as needed
  ],
};

export default NextAuth(authOptions);