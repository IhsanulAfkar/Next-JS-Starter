import NextAuth from "next-auth";
import { config } from "./config";

export const handler = NextAuth(config)
export { handler as GET, handler as POST }