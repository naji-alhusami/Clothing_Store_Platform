import {
  LogOut,
  Package,
  PlusCircle,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface AdminNavigationItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const adminNavigation: AdminNavigationItem[] = [
  { label: "المنتجات", href: "/admin", icon: Package },
  { label: "إضافة منتج", href: "/admin/products/new", icon: PlusCircle },
  { label: "إعدادات الموقع", href: "/admin/settings", icon: Settings },
  { label: "تسجيل الخروج", href: "/admin/login", icon: LogOut },
];
