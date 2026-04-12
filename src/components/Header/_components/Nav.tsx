"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// ==============================
function Nav() {
  const links = [
    { id: "1", linkTxt: "الصفحة الرئيسية", href: "/" },
    { id: "2", linkTxt: "المنتجات", href: "/products" },
    { id: "3", linkTxt: "الفواتير", href: "/invoices" },
    { id: "4", linkTxt: "العملاء", href: "/customers" },
    { id: "5", linkTxt: "التقارير", href: "/reports" },
    { id: "6", linkTxt: "الإشعارات", href: "/notifications" },
  ];
  const pathname = usePathname()
  return (
    <nav className="bg-white rounded-md py-3.5 px-8 shadow">
      <ul className="flex items-center gap-5">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className={`hover:text-yellow-500 font-semibold transition-css relative group ${pathname==link.href && "text-yellow-500"}`}
            >
              {link.linkTxt}
            <span className={`absolute -bottom-3 left-0 w-0 group-hover:w-full rounded transition-all duration-300 ease-out h-0.5 bg-yellow-500 ${pathname=== link.href && "w-full"}`} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
