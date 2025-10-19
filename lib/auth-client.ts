import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient();

export const GoogleLogin = async () => {
   await authClient.signIn.social({
    provider: "google",
    callbackURL:"/"
  });
};