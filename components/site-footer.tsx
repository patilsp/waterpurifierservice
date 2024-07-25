"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Github, Dribbble, Home, Bookmark, Edit, Search, Settings } from 'lucide-react';
import { CommandMenu } from "@/components/command-menu";


export function SiteFooter() {
  return (
    <footer className="block py-2 md:hidden">
      <div className="fixed bottom-0 z-50 w-full border-t border-gray-200 bg-white py-2 dark:border-gray-600 dark:bg-gray-700">
        <div className="mx-auto grid h-full max-w-lg grid-cols-5">
         
          <a href="/" data-tooltip-target="tooltip-home" className="group inline-flex flex-col items-center justify-center p-2 hover:bg-gray-50 dark:hover:bg-gray-800">
            <Home className="mb-1 size-6 text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500" />
            <span className="sr-only">Home</span>
          </a>
          <div id="tooltip-home" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
            Home
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          
          <button data-tooltip-target="tooltip-bookmark" type="button" className="group inline-flex flex-col items-center justify-center p-2 hover:bg-gray-50 dark:hover:bg-gray-800">
            <Bookmark className="mb-1 size-6 text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500" />
            <span className="sr-only">Bookmark</span>
          </button>
          <div id="tooltip-bookmark" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
            Bookmark
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          
          <a href="/create-complaint" data-tooltip-target="tooltip-post" type="button" className="group inline-flex flex-col items-center justify-center p-2 hover:bg-gray-50 dark:hover:bg-gray-800">
            <Edit className="mb-1 size-6 text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500" />
            <span className="sr-only">New Complaint</span>
          </a>
          <div id="tooltip-post" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
            New Complaint
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          
        
        
          <CommandMenu />

          
          <button data-tooltip-target="tooltip-settings" type="button" className="group inline-flex flex-col items-center justify-center p-2 hover:bg-gray-50 dark:hover:bg-gray-800">
            <Settings className="mb-1 size-6 text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500" />
            <span className="sr-only">Settings</span>
          </button>
          <div id="tooltip-settings" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
            Settings
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 sm:hidden">
            <p className="text-center text-sm leading-loose text-white">
              Built by{" "}
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Santosh Patil
              </a>
              . The source code is <br /> available on{" "}
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                GitHub
              </a>
              .
            </p>
          </div>
    </footer>
  );
}
