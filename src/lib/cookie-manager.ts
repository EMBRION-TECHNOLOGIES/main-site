// Cookie Management System
export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

export class CookieManager {
  private static instance: CookieManager;
  private preferences: CookiePreferences;

  private constructor() {
    this.preferences = this.loadPreferences();
  }

  public static getInstance(): CookieManager {
    if (!CookieManager.instance) {
      CookieManager.instance = new CookieManager();
    }
    return CookieManager.instance;
  }

  // Load user preferences from localStorage
  private loadPreferences(): CookiePreferences {
    if (typeof window === 'undefined') {
      return this.getDefaultPreferences();
    }

    const stored = localStorage.getItem('cookie-preferences');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        return {
          essential: true, // Always true
          analytics: parsed.analytics ?? false,
          marketing: parsed.marketing ?? false,
          timestamp: parsed.timestamp ?? Date.now()
        };
      } catch {
        return this.getDefaultPreferences();
      }
    }

    return this.getDefaultPreferences();
  }

  // Get default preferences
  private getDefaultPreferences(): CookiePreferences {
    return {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now()
    };
  }

  // Save preferences to localStorage
  public savePreferences(preferences: Partial<CookiePreferences>): void {
    this.preferences = { ...this.preferences, ...preferences, timestamp: Date.now() };
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie-preferences', JSON.stringify(this.preferences));
    }

    // Apply cookie settings based on preferences
    this.applyCookieSettings();
  }

  // Get current preferences
  public getPreferences(): CookiePreferences {
    return { ...this.preferences };
  }

  // Check if a specific cookie type is allowed
  public isAllowed(cookieType: keyof Omit<CookiePreferences, 'timestamp'>): boolean {
    return this.preferences[cookieType];
  }

  // Apply cookie settings based on current preferences
  private applyCookieSettings(): void {
    if (typeof window === 'undefined') return;

    // Essential cookies are always enabled
    if (this.preferences.essential) {
      this.enableEssentialCookies();
    }

    // Analytics cookies
    if (this.preferences.analytics) {
      this.enableAnalyticsCookies();
    } else {
      this.disableAnalyticsCookies();
    }

    // Marketing cookies
    if (this.preferences.marketing) {
      this.enableMarketingCookies();
    } else {
      this.disableMarketingCookies();
    }
  }

  // Enable essential cookies (always enabled)
  private enableEssentialCookies(): void {
    // These cookies are necessary for basic functionality
    // They're set automatically by the server/application
    console.log('Essential cookies enabled');
  }

  // Enable analytics cookies
  private enableAnalyticsCookies(): void {
    // Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
    
    // Custom analytics tracking
    this.setCookie('analytics_enabled', 'true', 365);
    console.log('Analytics cookies enabled');
  }

  // Disable analytics cookies
  private disableAnalyticsCookies(): void {
    // Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
    
    // Remove analytics cookies
    this.removeCookie('analytics_enabled');
    this.removeCookie('_ga');
    this.removeCookie('_gid');
    console.log('Analytics cookies disabled');
  }

  // Enable marketing cookies
  private enableMarketingCookies(): void {
    // Google Ads, Facebook Pixel, etc.
    this.setCookie('marketing_enabled', 'true', 365);
    console.log('Marketing cookies enabled');
  }

  // Disable marketing cookies
  private disableMarketingCookies(): void {
    // Remove marketing cookies
    this.removeCookie('marketing_enabled');
    console.log('Marketing cookies disabled');
  }

  // Set a cookie
  private setCookie(name: string, value: string, days: number): void {
    if (typeof window === 'undefined') return;

    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  }

  // Remove a cookie
  private removeCookie(name: string): void {
    if (typeof window === 'undefined') return;

    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  }

  // Get all cookies
  public getAllCookies(): Record<string, string> {
    if (typeof window === 'undefined') return {};

    const cookies: Record<string, string> = {};
    document.cookie.split(';').forEach(cookie => {
      const [name, value] = cookie.trim().split('=');
      if (name && value) {
        cookies[name] = value;
      }
    });
    return cookies;
  }

  // Clear all non-essential cookies
  public clearNonEssentialCookies(): void {
    const cookies = this.getAllCookies();
    
    Object.keys(cookies).forEach(cookieName => {
      if (!cookieName.startsWith('session_') && 
          !cookieName.startsWith('csrf_') && 
          !cookieName.startsWith('cookie-')) {
        this.removeCookie(cookieName);
      }
    });
  }

  // Reset to default preferences
  public resetPreferences(): void {
    this.preferences = this.getDefaultPreferences();
    this.savePreferences(this.preferences);
  }

  // Check if user has made a choice
  public hasUserConsented(): boolean {
    return this.preferences.timestamp > 0;
  }

  // Get consent status for display
  public getConsentStatus(): string {
    if (!this.hasUserConsented()) return 'not-set';
    
    if (this.preferences.analytics && this.preferences.marketing) return 'all';
    if (this.preferences.analytics) return 'analytics';
    if (this.preferences.marketing) return 'marketing';
    return 'essential';
  }
}

// Global instance
export const cookieManager = CookieManager.getInstance();

// Type declarations for global objects
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
