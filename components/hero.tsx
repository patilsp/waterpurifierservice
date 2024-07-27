"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ThumbsUp, Settings, ArrowRight, Users } from "lucide-react";

export default function Hero() {
  return (
  <section>


    <div className="container space-y-6  py-8 dark:bg-gray-900 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center space-y-4 text-center">
        <h1 className="font-fold text-4xl leading-[1.1] md:text-8xl">
          Our Features
        </h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Discover the powerful features of our water purifier service app, designed to ensure clean and safe water for you and your family.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-5xl md:grid-cols-3">
        <div className="relative overflow-hidden rounded-lg border bg-background p-4 shadow hover:border-orange-500">
          <div className="flex  flex-row items-start justify-between gap-4 rounded-md p-2">
            <ShieldCheck className="size-16 fill-current text-blue-500" />
            <div className="space-y-2">
              <h3 className="text-lg font-bold">Clean Water</h3>
              <p className="text-sm text-muted-foreground">
                Advanced filtration technology to ensure the purest water for your home.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-4 shadow hover:border-orange-500">
          <div className="flex  flex-row items-start justify-between gap-4 rounded-md p-2">
            <ThumbsUp className="size-16 fill-current text-green-500" />
            <div className="space-y-2">
              <h3 className="text-lg font-bold">Enhanced Protection</h3>
              <p className="text-sm text-muted-foreground">
                Multi-stage purification with added safety features to protect against contaminants.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-4 shadow hover:border-orange-500">
          <div className="flex  flex-row items-start justify-between gap-4 rounded-md p-2">
            <Users className="size-16 fill-current text-orange-500" />
            <div className="space-y-2">
              <h3 className="text-lg font-bold">Customer Friendly</h3>
              <p className="text-sm text-muted-foreground">
                Designed with Customer friendly materials and processes to minimize environmental impact.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-4 shadow hover:border-orange-500">
          <div className="flex  flex-row items-start justify-between gap-4 rounded-md p-2">
            <ArrowRight className="size-16 fill-current text-red-500" />
            <div className="space-y-2">
              <h3 className="text-lg font-bold">Easy Installation</h3>
              <p className="text-sm text-muted-foreground">
                Quick and hassle-free installation with clear instructions and support.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-4 shadow hover:border-orange-500">
          <div className="flex  flex-row items-start justify-between gap-4 rounded-md p-2">
            <ShieldCheck className="size-16 fill-current text-pink-500" />
            <div className="space-y-2">
              <h3 className="text-lg font-bold">Fresh Water</h3>
              <p className="text-sm text-muted-foreground">
                Advanced filtration technology to ensure the purest water for your home.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-4 shadow hover:border-orange-500">
          <div className="flex  flex-row items-start justify-between gap-4 rounded-md p-2">
            <Settings className="size-16 fill-current text-yellow-500" />
            <div className="space-y-2">
              <h3 className="text-lg font-bold">Customizable Settings</h3>
              <p className="text-sm text-muted-foreground">
                Tailor the settings of your purifier to fit your specific needs and preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    </section>
  );
}
