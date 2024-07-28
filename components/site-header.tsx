"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { CommandMenu } from "@/components/command-menu";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/registry/new-york/ui/button";
import { UserButton, useAuth, useUser, SignIn } from "@clerk/nextjs";
import { useRouter } from 'next/navigation'

export function SiteHeader() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isSignedIn, user } = useUser();
  const router = useRouter()


  // if (!user) {
  //   return;
  // }

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full shadow backdrop-blur dark:bg-slate-900 dark:text-white">
      <div className="flex h-14 items-center pl-2">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/water.svg"
            className="mt-8 object-contain"
            width={60}
            height={60}
            alt="Logo image"
          />
        </Link>
        
        <MainNav />
        
        {/* <MobileNav /> */}
        
        <div className="flex flex-1 items-center justify-end  md:justify-end">
        {/* <CommandMenu /> */}
          {/* <ModeToggle /> */}
          {/* <Link href="/dashboard" className="mr-1 justify-center rounded-md border bg-white p-1 px-2 font-medium  text-black shadow transition-colors   focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:flex">
                Dashboard
             
            </Link> */}
            <button className="mr-1 hidden justify-center rounded-md  p-1 px-2 text-sm font-medium text-black shadow  transition-colors focus-visible:outline-none focus-visible:ring-1   focus-visible:ring-ring dark:text-white md:flex" type="button" onClick={() => router.push('/dashboard')}>
              Dashboard
            </button>

          {userId == null ? (
            <Link href="/sign-in" className="mr-1 flex w-20 justify-center rounded-md p-1 font-medium text-black shadow   transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                Sign In
             
            </Link>
          ) : (
            <UserButton afterSignOutUrl="/sign-in" />
          )}
        </div>
      </div>
    </header>
  );
}
