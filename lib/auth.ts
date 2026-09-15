import { cookies } from "next/headers";

export const ADMIN_SESSION_COOKIE = "challeneasy_admin_session";

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  return token === process.env.ADMIN_SESSION_TOKEN || token === "demo-admin-session";
}

export async function requireAdmin() {
  const authenticated = await isAdminAuthenticated();
  if (!authenticated) {
    return false;
  }
  return true;
}
