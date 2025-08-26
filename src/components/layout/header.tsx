'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/ui/logo";

export default function Header() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Left side */}
          <div className="flex items-center">
            <Link href="/" className="group">
              <Logo 
                variant="full" 
                width={180} 
                height={40} 
                priority={true}
                className="transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Navigation - Center */}
          <nav className="hidden lg:flex items-center justify-center flex-1 max-w-2xl mx-2">
            <div className="flex items-center space-x-12">
              <Link 
                href="/" 
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  isActive('/') 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Home
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-200 ${
                  isActive('/')
                    ? 'w-full bg-primary'
                    : 'w-0 bg-primary group-hover:w-full'
                }`}></span>
              </Link>
              <Link 
                href="/about" 
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  isActive('/about') 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                About
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-200 ${
                  isActive('/about') 
                    ? 'w-full bg-primary' 
                    : 'w-0 bg-primary group-hover:w-full'
                }`}></span>
              </Link>
              <Link 
                href="/services" 
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  isActive('/services') 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Services
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-200 ${
                  isActive('/services') 
                    ? 'w-full bg-primary' 
                    : 'w-0 bg-primary group-hover:w-full'
                }`}></span>
              </Link>
              <Link 
                href="/products" 
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  isActive('/products') 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Products
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-200 ${
                  isActive('/products') 
                    ? 'w-full bg-primary' 
                    : 'w-0 bg-primary group-hover:w-full'
                }`}></span>
              </Link>
              <Link 
                href="/case-studies" 
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  isActive('/case-studies') 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Case Studies
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-200 ${
                  isActive('/case-studies') 
                    ? 'w-full bg-primary' 
                    : 'w-0 bg-primary group-hover:w-full'
                }`}></span>
              </Link>
              <Link 
                href="/investors" 
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  isActive('/investors') 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Investors
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-200 ${
                  isActive('/investors') 
                    ? 'w-full bg-primary' 
                    : 'w-0 bg-primary group-hover:w-full'
                }`}></span>
              </Link>
            </div>
          </nav>

          {/* Right side - Actions */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <div className="hidden sm:block">
              <Link href="/contact">
                <Button size="sm" className="px-4 py-2 font-medium">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="sm:hidden">
              <Link href="/contact">
                <Button size="sm" variant="ghost" className="px-3 py-2">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden border-t">
          <nav className="grid grid-cols-6 py-3">
            <Link 
              href="/" 
              className={`text-xs font-medium transition-colors text-center px-2 py-1 rounded hover:bg-muted/50 ${
                isActive('/') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`text-xs font-medium transition-colors text-center px-2 py-1 rounded hover:bg-muted/50 ${
                isActive('/about') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className={`text-xs font-medium transition-colors text-center px-2 py-1 rounded hover:bg-muted/50 ${
                isActive('/services') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Services
            </Link>
            <Link 
              href="/products" 
              className={`text-xs font-medium transition-colors text-center px-2 py-1 rounded hover:bg-muted/50 ${
                isActive('/products') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Products
            </Link>
            <Link 
              href="/case-studies" 
              className={`text-xs font-medium transition-colors text-center px-1 py-1 rounded hover:bg-muted/50 ${
                isActive('/case-studies') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground'
            }`}
            >
              Case Studies
            </Link>
            <Link 
              href="/investors" 
              className={`text-xs font-medium transition-colors text-center px-2 py-1 rounded hover:bg-muted/50 ${
                isActive('/investors') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Investors
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
