import {
  Code2,
  ShoppingBag,
  LayoutDashboard,
  Smartphone,
  Sparkles,
  Feather,
  Search,
  Server,
  Compass,
  LifeBuoy,
  Palette,
  Boxes,
  type LucideIcon,
} from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  web: Code2,
  ecommerce: ShoppingBag,
  apps: LayoutDashboard,
  mobile: Smartphone,
  ai: Sparkles,
  wordpress: Boxes,
  branding: Palette,
  seo: Search,
  hosting: Server,
  consulting: Compass,
  maintenance: LifeBuoy,
  products: Feather,
};

export function getServiceIcon(id: string): LucideIcon {
  return serviceIcons[id] || Code2;
}
