export type NavigationItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'How I Work', href: '/how-i-work' },
  { label: 'Projects', href: '/projects' },
  { label: '3D Printing', href: '/3d-printing' },
  { label: 'Contact', href: '/contact' },
];
