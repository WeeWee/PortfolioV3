import { Link, useLocation } from "@remix-run/react";
import { ThemeToggle } from "./theme-toggle";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { RemixLinkProps } from "@remix-run/react/dist/components";
import { cn } from "~/lib/utils";
import {
	BriefcaseBusinessIcon,
	HomeIcon,
	LayoutGridIcon,
	UserIcon,
} from "lucide-react";

export function Navbar() {
	const pathname = useLocation().pathname;

	return (
		<>
			<NavigationMenu className="min-w-full py-2 h-14 *:w-full hidden md:block ">
				<NavigationMenuList className="w-full">
					<NavigationMenuItem>
						<NavigationMenuLink
							asChild
							className={navigationMenuTriggerStyle()}
						>
							<Link to="/">Home</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink
							asChild
							className={navigationMenuTriggerStyle()}
						>
							<Link to="/about">About</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink
							asChild
							className={navigationMenuTriggerStyle()}
						>
							<Link to="/experiences">Experiences</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink
							asChild
							className={navigationMenuTriggerStyle()}
						>
							<Link to="/projects">Projects</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<ThemeToggle />
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<nav className="fixed bottom-0 z-50  left-0 w-full md:hidden block">
				<div className=" bg-background flex items-center px-8 gap-4 justify-between border border-border h-16">
					<ListItem to="/" pathname={pathname}>
						<HomeIcon aria-label="Home" role="img" className="w-5 h-5" />
					</ListItem>
					<ListItem pathname={pathname} to="/about">
						<UserIcon aria-label="About" role="img" className="w-5 h-5" />
					</ListItem>
					<ListItem pathname={pathname} to="/experiences">
						<BriefcaseBusinessIcon
							aria-label="Experiences"
							role="img"
							className="w-5 h-5"
						/>
					</ListItem>
					<ListItem pathname={pathname} to="/projects">
						<LayoutGridIcon
							aria-label="Projects"
							role="img"
							className="w-5 h-5"
						/>
					</ListItem>

					<ThemeToggle />
				</div>
			</nav>
		</>
	);
}

const ListItem = (props: RemixLinkProps & { pathname: string }) => {
	return (
		<Link
			{...props}
			className={cn(
				"flex flex-col items-center justify-center group",
				props.pathname === props.to ? "text-primary" : "text-muted-foreground"
			)}
		>
			{props.children}
		</Link>
	);
};
