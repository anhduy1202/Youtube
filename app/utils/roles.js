'use server'
import { auth } from "@clerk/nextjs"
 
export const checkRole = (role) => {
  const { sessionClaims } = auth()
  return sessionClaims?.metadata.role === role;
}