import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'react-hot-toast';


export const metadata: Metadata = {
  title: {
    default: 'Excellent Service',
    template: `%s - ${siteConfig.name}`,
  },
  description: 'Clean, Clear, Confident: Transforming Lives One Drop at a Time',

  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
    <ClerkProvider>
      <html lang="en">
      <body
          className={cn(
            "min-h-screen  font-sans antialiased",
            fontSans.variable
          )}
        >
          <div className='main'>
          <div className='gradient' />
        </div>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
                <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
            <TailwindIndicator />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
      </ClerkProvider>
    </>
  )
}
