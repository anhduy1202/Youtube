import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'
import jwt from "jsonwebtoken";
import * as jose from 'jose'
const jwksClient = require('jwks-rsa'); // Use a library like 'jwks-rsa' to handle JWK sets
const AUTH_PAGES = ["/employee"];
const isAuthPages = (url) => AUTH_PAGES.some((page) => page.startsWith(url))

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/"],
});
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};