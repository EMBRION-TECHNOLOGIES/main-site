"use client";

import { useState, useEffect } from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, BarChart3, Megaphone, Settings, RefreshCw, CheckCircle2, XCircle } from "lucide-react";
import { cookieManager, type CookiePreferences } from "@/lib/cookie-manager";

export default function CookieSettings() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    timestamp: 0
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const currentPreferences = cookieManager.getPreferences();
    setPreferences(currentPreferences);
  }, []);

  const handlePreferenceChange = (type: keyof Omit<CookiePreferences, 'timestamp'>, value: boolean) => {
    setPreferences(prev => ({ ...prev, [type]: value }));
    setSaved(false);
  };

  const savePreferences = () => {
    cookieManager.savePreferences(preferences);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const resetPreferences = () => {
    cookieManager.resetPreferences();
    const defaultPrefs = cookieManager.getPreferences();
    setPreferences(defaultPrefs);
    setSaved(false);
  };

  const getConsentStatus = () => {
    return cookieManager.getConsentStatus();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'all': return 'text-green-600 bg-green-100';
      case 'analytics': return 'text-blue-600 bg-blue-100';
      case 'essential': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'all': return 'All Cookies Accepted';
      case 'analytics': return 'Analytics Only';
      case 'essential': return 'Essential Only';
      default: return 'Not Set';
    }
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Cookie Settings</h1>
        <p className="text-muted-foreground">
          Manage your cookie preferences and control how we use cookies on our website.
        </p>
      </div>

      {/* Current Status */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Current Cookie Status
          </CardTitle>
          <CardDescription>
            Your current cookie consent status and preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Consent Status:</p>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(getConsentStatus())}`}>
                {getStatusText(getConsentStatus())}
              </span>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground mb-2">Last Updated:</p>
              <p className="text-sm font-medium">
                {preferences.timestamp ? new Date(preferences.timestamp).toLocaleDateString() : 'Never'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cookie Preferences */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Cookie Preferences</CardTitle>
          <CardDescription>
            Choose which types of cookies you want to allow on our website
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Essential Cookies */}
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-green-600" />
                <div>
                  <h3 className="font-semibold">Essential Cookies</h3>
                  <p className="text-sm text-muted-foreground">Required for basic website functionality</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Always Active
                </span>
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              These cookies are necessary for the website to function and cannot be switched off. 
              They include session management, security features, and basic functionality.
            </p>
          </div>

          {/* Analytics Cookies */}
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Analytics Cookies</h3>
                  <p className="text-sm text-muted-foreground">Help us understand website usage</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  Optional
                </span>
                <input
                  type="checkbox"
                  id="analytics"
                  checked={preferences.analytics}
                  onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                  className="rounded border-border"
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              These cookies help us understand how visitors interact with our website, 
              which pages are most popular, and how users navigate through the site.
            </p>
            <div className="text-xs text-muted-foreground">
              <strong>Examples:</strong> Google Analytics, page view tracking, user behavior analysis
            </div>
          </div>

          {/* Marketing Cookies */}
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <Megaphone className="h-5 w-5 text-purple-600" />
                <div>
                  <h3 className="font-semibold">Marketing Cookies</h3>
                  <p className="text-sm text-muted-foreground">Used for personalized advertising</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                  Optional
                </span>
                <input
                  type="checkbox"
                  id="marketing"
                  checked={preferences.marketing}
                  onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                  className="rounded border-border"
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              These cookies are used to deliver personalized advertisements and track 
              advertising campaign performance across different websites.
            </p>
            <div className="text-xs text-muted-foreground">
              <strong>Examples:</strong> Google Ads, Facebook Pixel, retargeting cookies
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={savePreferences}
          className="px-8 py-3 text-lg"
          disabled={saved}
        >
          {saved ? (
            <>
              <CheckCircle2 className="h-5 w-5 mr-2" />
              Preferences Saved!
            </>
          ) : (
            'Save Preferences'
          )}
        </Button>
        
        <Button
          variant="outline"
          onClick={resetPreferences}
          className="px-8 py-3 text-lg"
        >
          <RefreshCw className="h-5 w-5 mr-2" />
          Reset to Defaults
        </Button>
      </div>

      {/* Information */}
      <div className="mt-12 p-6 bg-muted/30 rounded-lg">
        <h3 className="font-semibold mb-3">How to Manage Cookies</h3>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>
            <strong>Browser Settings:</strong> You can also control cookies through your web browser settings. 
            Most browsers allow you to block or delete cookies, though this may affect website functionality.
          </p>
          <p>
            <strong>Third-Party Tools:</strong> Some third-party tools and browser extensions can help you 
            manage cookies across multiple websites.
          </p>
          <p>
            <strong>Updates:</strong> Your preferences are automatically applied when you visit our website. 
            You can change these settings at any time by returning to this page.
          </p>
        </div>
      </div>

      {/* Current Cookies List */}
      <div className="mt-8">
        <h3 className="font-semibold mb-4">Current Cookies on This Site</h3>
        <div className="bg-muted/30 rounded-lg p-4">
          <p className="text-sm text-muted-foreground">
            This feature shows all cookies currently stored by our website. 
            You can view and manage these through your browser's developer tools.
          </p>
          <div className="mt-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const cookies = cookieManager.getAllCookies();
                console.log('Current cookies:', cookies);
                alert(`Current cookies logged to console. Check browser developer tools.`);
              }}
            >
              View Current Cookies
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
