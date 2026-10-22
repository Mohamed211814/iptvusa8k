import { siteConfig, NavItem } from "./site-config";

/**
 * Returns navigation items formatted with proper paths depending on the current pathname.
 * If user is on an inner page like /contact or /legal, anchor links like #plans become /#plans.
 */
export function getResolvedNavItems(currentPath: string = "/"): NavItem[] {
  const isHome = currentPath === "/";

  function resolveHref(href: string): string {
    if (href.startsWith("/#")) {
      return isHome ? href.replace("/", "") : href;
    }
    return href;
  }

  function resolveItem(item: NavItem): NavItem {
    return {
      ...item,
      href: resolveHref(item.href),
      children: item.children ? item.children.map(resolveItem) : undefined,
    };
  }

  return siteConfig.navigation.map(resolveItem);
}

export interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

export function getBreadcrumbsForPath(pathname: string): BreadcrumbItem[] {
  const crumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
  ];

  if (pathname === "/contact") {
    crumbs.push({ label: "Contact Us", href: "/contact", current: true });
  } else if (pathname === "/legal") {
    crumbs.push({ label: "Legal & Policies", href: "/legal", current: true });
  }

  return crumbs;
}
