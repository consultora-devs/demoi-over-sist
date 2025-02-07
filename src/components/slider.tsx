'use client';

import { FileText, Search, ClipboardList, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const menuItems = [
  {
    title: 'Registro de Ordenes de Trabajo',
    icon: FileText,
    href: '/registro-ordenes',
  },
  {
    title: 'Reportes',
    icon: BarChart3,
    href: '/reportes',
  },
  {
    title: 'Búsqueda por Placa',
    icon: Search,
    href: '/busqueda-placa',
  },
  {
    title: 'Búsqueda por DNI',
    icon: ClipboardList,
    href: '/busqueda-dni',
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-72 flex-col bg-gray-700 text-white  shadow-sm">
      <div className="p-6">
        <h2 className="text-2xl font-bold ">Sistema</h2>
      </div>
      
      <nav className="flex-1 space-y-1 px-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex bg-gray-800 p-2 rounded-md  gap-2 py-3 hover:bg-gray-900 transition-all"
            >
              <Icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}