
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    // Called during the sign-in process
    // async signIn({ user }) {
    //   try {
    //     // Check if the user exists in the database
    //     const existingUser = await prisma.user.findUnique({
    //       where: { email: user.email },
    //     });

    //     // If the user doesn't exist, create a new user
    //     if (!existingUser) {
    //       const createdUser = await prisma.user.create({
    //         data: {
    //           email: user.email,
    //           name: user.name,
    //           image: user.image, // Optionally, store the profile image
    //         },
    //       });

    //       // Assign the created user ID to the user object
    //       user.id = createdUser.id;
    //     } else {
    //       // Assign the existing user ID to the user object
    //       user.id = existingUser.id;
    //     }

    //     return true; // Allow sign-in
    //   } catch (error) {
    //     console.error("Error in sign-in callback:", error);
    //     return false; // Reject sign-in on error
    //   }
    // },
    // Called when the session is created or updated
    async session({ session, user }) {
      // Add user ID to session for access throughout the app
      session.user.id = user.id;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/sign-in", // Optional: Custom sign-in page
  },
});