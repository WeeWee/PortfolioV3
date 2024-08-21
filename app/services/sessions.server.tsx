import { createCookieSessionStorage } from "@remix-run/node"
import { createThemeSessionResolver } from "remix-themes"

// You can default to 'development' if process.env.NODE_ENV is not set
const isProduction = process.env.NODE_ENV === "production"

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "theme",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secrets: [process.env.THEME_SESSION_SECRET!],
    ...(isProduction
      ? { domain: "https://www.adamkindberg.com", secure: true }
      : {}),
  },
})

export const themeSessionResolver = createThemeSessionResolver(sessionStorage)
