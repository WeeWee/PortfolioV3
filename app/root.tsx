import {
	isRouteErrorResponse,
	Link,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
	useRouteError,
} from "@remix-run/react";
import "~/tailwind.css";
import { Navbar } from "./components/navbar";
import {
	PreventFlashOnWrongTheme,
	Theme,
	ThemeProvider,
	useTheme,
} from "remix-themes";
import { themeSessionResolver } from "./services/sessions.server";
import { LoaderFunctionArgs } from "@remix-run/node";
import clsx from "clsx";
import { Button } from "./components/ui/button";
import { useEffect } from "react";
import { ClientOnly } from "remix-utils/client-only";
export async function loader({ request }: LoaderFunctionArgs) {
	const { getTheme } = await themeSessionResolver(request);
	return {
		theme: getTheme(),
	};
}

export default function AppWithProviders() {
	const data = useLoaderData<typeof loader>();

	return (
		<ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
			<App />
		</ThemeProvider>
	);
}
function App() {
	const data = useLoaderData<typeof loader>();
	const [theme, setTheme] = useTheme();
	useEffect(() => {
		if (window != undefined && !theme && !data.theme)
			setTheme(
				window.matchMedia("(prefers-color-scheme: dark)").matches
					? Theme.DARK
					: Theme.LIGHT
			);
	}, []);
	return (
		<html lang="en" className={clsx(theme, "scroll-smooth")}>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
				<Links />
			</head>
			<body>
				<main className="container min-h-screen">
					<ClientOnly fallback={<nav className="min-w-full py-2 h-14"></nav>}>
						{() => <Navbar />}
					</ClientOnly>
					<div className="py-4 pb-20 md:pb-4">
						<Outlet />
					</div>
				</main>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export function ErrorBoundary() {
	const error = useRouteError();

	return (
		<html lang="en" className={clsx("dark")}>
			<head>
				<title>Oops!</title>
				<Meta />
				<Links />
			</head>
			<body className="flex min-h-screen flex-col items-center justify-center">
				<div className="flex flex-col items-center">
					<h1 className="font-bold text-4xl">
						{isRouteErrorResponse(error)
							? `${error.status} ${error.statusText}`
							: error instanceof Error
							? error.message
							: "Unknown Error"}
					</h1>
					<p className=" text-secondary">Page could not be found</p>
					<Button asChild className="mt-2">
						<Link to="/">Go back</Link>
					</Button>
				</div>
				<Scripts />
			</body>
		</html>
	);
}
