"use client";

import Link from "next/link";
import { Home, Bookmark, Edit, Settings } from 'lucide-react';
import { CommandMenu } from "@/components/command-menu";

export function SiteFooter() {
  return (
    <footer className="fixed bottom-0 z-50 block w-full border-t border-gray-200 bg-white py-2 dark:border-gray-600 dark:bg-gray-700 md:hidden">
      <div className="mx-auto max-w-lg">
        <div className="grid grid-cols-5 gap-2 px-2">
          <a href="/" className="group flex flex-col items-center justify-center rounded-md p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
            <Home className="mb-1 text-gray-500 transition-colors group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500" />
            <span className="sr-only">Home</span>
          </a>

          <a href="/bookmarks" className="group flex flex-col items-center justify-center rounded-md p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
            <Bookmark className="mb-1 text-gray-500 transition-colors group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500" />
            <span className="sr-only">Bookmarks</span>
          </a>

          <a href="/create-complaint" className="group flex flex-col items-center justify-center rounded-md p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
            <Edit className="mb-1 text-gray-500 transition-colors group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500" />
            <span className="sr-only">New Complaint</span>
          </a>

          <CommandMenu />

          <a href="/settings" className="group flex flex-col items-center justify-center rounded-md p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
            <Settings className="mb-1 text-gray-500 transition-colors group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500" />
            <span className="sr-only">Settings</span>
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 bg-gray-800 py-4 text-white dark:bg-gray-900">
        <p className="text-center text-sm leading-loose">
          Built by{" "}
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 hover:text-blue-400 transition-colors"
          >
            Santosh Patil
          </a>
          . The source code is available on{" "}
          <a
            href="$"  
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
