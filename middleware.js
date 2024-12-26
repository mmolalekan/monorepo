// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const hostname = request.nextUrl.hostname; // e.g., "learn.ebaad.org"
  const subdomain = hostname.split(".")[0]; // Extract subdomain: "learn"

  // Route based on subdomain
  switch (subdomain) {
    case "www":
      return NextResponse.rewrite(new URL("/landing", request.url));
    case "learn":
      return NextResponse.rewrite(new URL("/student", request.url));
    case "tutor":
      return NextResponse.rewrite(new URL("/tutor", request.url));
    case "supervisor":
      return NextResponse.rewrite(new URL("/supervisor", request.url));
    case "admin":
      return NextResponse.rewrite(new URL("/admin", request.url));
    default:
      return NextResponse.redirect(new URL("https://www.ebaad.org", request.url)); // Redirect unknown subdomains
  }
}
