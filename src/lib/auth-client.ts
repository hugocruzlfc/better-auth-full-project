import { inferAdditionalFields } from "better-auth/client/plugins";
import { nextCookies } from "better-auth/next-js";
import { createAuthClient } from "better-auth/react";
import { auth } from "./auth";

export const { signIn, signUp, signOut, useSession, sendVerificationEmail } =
  createAuthClient({
    plugins: [inferAdditionalFields<typeof auth>(), nextCookies()],
  });
