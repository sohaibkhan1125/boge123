import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

// Exclude the /dashboard/settings(.*) route from protection
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '!/dashboard/settings(.*)',  // Exclude this route from protection
]);

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
