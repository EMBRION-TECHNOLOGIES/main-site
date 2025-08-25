"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Settings, Shield, Cookie, BarChart3, Megaphone } from "lucide-react";
import Link from "next/link";
import { cookieManager, type CookiePreferences } from "@/lib/cookie-manager";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    timestamp: 0
  });

  useEffect(() => {
    // Check if user has already made a choice
    const currentPreferences = cookieManager.getPreferences();
    if (!cookieManager.hasUserConsented()) {
      setShowBanner(true);
      setPreferences(currentPreferences);
    }
  }, []);

  const acceptAll = () => {
    const newPreferences = {
      essential: true,
      analytics: true,
      marketing: true
    };
    
    cookieManager.savePreferences(newPreferences);
    setPreferences({ ...newPreferences, timestamp: Date.now() });
    setShowBanner(false);
  };

  const acceptEssential = () => {
    const newPreferences = {
      essential: true,
      analytics: false,
      marketing: false
    };
    
    cookieManager.savePreferences(newPreferences);
    setPreferences({ ...newPreferences, timestamp: Date.now() });
    setShowBanner(false);
  };

  const rejectAll = () => {
    const newPreferences = {
      essential: true,
      analytics: false,
      marketing: false
    };
    
    cookieManager.savePreferences(newPreferences);
    setPreferences({ ...newPreferences, timestamp: Date.now() });
    setShowBanner(false);
  };

  const handlePreferenceChange = (type: keyof Omit<CookiePreferences, 'timestamp'>, value: boolean) => {
    setPreferences(prev => ({ ...prev, [type]: value }));
  };

  const saveCustomPreferences = () => {
    cookieManager.savePreferences(preferences);
    setShowSettings(false);
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <>
      {/* Main Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Cookie className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm mb-1">We use cookies to enhance your experience</h3>
                <p className="text-xs text-muted-foreground">
                  We use cookies and similar technologies to help personalize content, provide social media features, 
                  and analyze our traffic. We also share information about your use of our site with our social media, 
                  advertising, and analytics partners.{" "}
                  <Link href="/cookies" className="text-primary hover:underline text-xs">
                    Learn more
                  </Link>
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSettings(true)}
                className="text-xs px-3 py-1.5"
              >
                <Settings className="h-3 w-3 mr-1" />
                Settings
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={rejectAll}
                className="text-xs px-3 py-1.5"
              >
                Reject All
              </Button>
              <Button
                size="sm"
                onClick={acceptEssential}
                className="text-xs px-3 py-1.5"
              >
                Accept Essential
              </Button>
              <Button
                size="sm"
                onClick={acceptAll}
                className="text-xs px-3 py-1.5"
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Cookie Settings
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSettings(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                {/* Essential Cookies */}
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-sm">Essential Cookies</span>
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Always Active
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    These cookies are necessary for the website to function and cannot be switched off.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-blue-600" />
                      <span className="font-medium text-sm">Analytics Cookies</span>
                    </div>
                    <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      Optional
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="analytics"
                      checked={preferences.analytics}
                      onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                      className="rounded border-border"
                    />
                    <label htmlFor="analytics" className="text-xs">
                      Allow analytics cookies
                    </label>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Megaphone className="h-4 w-4 text-purple-600" />
                      <span className="font-medium text-sm">Marketing Cookies</span>
                    </div>
                    <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      Optional
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    These cookies are used to deliver personalized advertisements.
                  </p>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="marketing"
                      checked={preferences.marketing}
                      onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                      className="rounded border-border"
                    />
                    <label htmlFor="marketing" className="text-xs">
                      Allow marketing cookies
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-6">
                <Button
                  variant="outline"
                  onClick={() => setShowSettings(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  onClick={saveCustomPreferences}
                  className="flex-1"
                >
                  Save Preferences
                </Button>
              </div>

              <div className="mt-4 text-center">
                <Link href="/cookies" className="text-xs text-primary hover:underline">
                  View full Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
