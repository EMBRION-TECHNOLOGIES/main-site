'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Left side */}
          <div className="flex items-center">
                             <Link href="/" className="flex items-center space-x-3 group">
                   <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-200">
                     <span className="text-primary-foreground font-bold text-lg">E</span>
                   </div>
                   <span className="font-bold text-xl tracking-tight">Embrion</span>
                 </Link>
          </div>

          {/* Navigation - Center */}
          <nav className="hidden lg:flex items-center justify-center flex-1 max-w-2xl mx-2">
            <div className="flex items-center space-x-12">
              <Link 
                href="/about" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/services" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/products" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                Products
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/case-studies" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                Case Studies
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/investors" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                Investors
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
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
          <nav className="grid grid-cols-5 py-3">
            <Link 
              href="/about" 
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors text-center px-2 py-1 rounded hover:bg-muted/50"
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors text-center px-2 py-1 rounded hover:bg-muted/50"
            >
              Services
            </Link>
            <Link 
              href="/products" 
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors text-center px-2 py-1 rounded hover:bg-muted/50"
            >
              Products
            </Link>
            <Link 
              href="/case-studies" 
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors text-center px-1 py-1 rounded hover:bg-muted/50"
            >
              Case Studies
            </Link>
            <Link 
              href="/investors" 
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors text-center px-2 py-1 rounded hover:bg-muted/50"
            >
              Investors
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
