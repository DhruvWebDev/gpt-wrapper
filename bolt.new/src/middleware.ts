import { auth } from "@/auth"

export default auth((req) => {
  // Protect all routes under /builder
  const isAuth = !!req.auth
  const isProtectedRoute = req.nextUrl.pathname.startsWith('/builder')
  
  if (isProtectedRoute && !isAuth) {
    return Response.redirect(new URL('/sign-in', req.nextUrl))
  }
})

// Optionally configure middleware
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
