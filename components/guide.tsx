"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
    LogIn, 
    User, 
    MapPin, 
    Bookmark 
} from 'lucide-react';

export default function Guide() {
    return (
        <section className="space-y-6 bg-slate-100 py-8 md:py-12 lg:py-24">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h1 className="font-heading text-xl font-semibold leading-[1.1]">
                        - How it works
                    </h1>
                    <h2 className="font-heading text-3xl font-bold leading-[1.1]">
                       <span className="text_primary">A Step-By-Step Guide </span>
                    </h2>
                </div>
            </motion.div>

            <div className="space-y-2">
                <div className="relative h-full flex-col items-center justify-center py-20 md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <div className="mx-auto flex w-full flex-col justify-center space-y-6 p-2 sm:w-[555px]">
                                <div className="flex flex-col space-y-2 text-center">
                                    <div className="py-2 text-left">
                                        <div className="items-left justify-left mt-10 flex gap-x-6">
                                            <div className="flex flex-col gap-4">
                                                {/* Step 1 */}
                                                <div className="mb-10 flex gap-4 pr-4">
                                                    <div className="flex items-end justify-end rounded-full bg-black p-4">
                                                        <LogIn className="size-6 text-white"/>
                                                    </div>
                                                    <div className="">
                                                        <h2 className="text-xl font-semibold ">Sign Up</h2>
                                                        <p className="">Create an account to get started.</p>
                                                    </div>
                                                </div>

                                                {/* Step 2 */}
                                                <div className="mb-10 flex gap-4 pr-4">
                                                    <div className="bg1 flex items-end justify-end rounded-full bg-gray-200 p-4">
                                                        <User className="text_primary size-6"/>
                                                    </div>
                                                    <div className="">
                                                        <h2 className="text-xl font-semibold ">Create Profile</h2>
                                                        <p className="">Fill in your profile details.</p>
                                                    </div>
                                                </div>

                                                {/* Step 3 */}
                                                <div className="mb-10 flex gap-4 pr-4">
                                                    <div className="bg1 flex items-end justify-end rounded-full bg-gray-200 p-4">
                                                        <MapPin className="text_primary size-6"/>
                                                    </div>
                                                    <div className="">
                                                        <h2 className="text-xl font-semibold ">Find Near Distributor</h2>
                                                        <p className="">Explore services around you.</p>
                                                    </div>
                                                </div>

                                                {/* Step 4 */}
                                                <div className="mb-10 flex gap-4 pr-4">
                                                    <div className="bg1 flex items-end justify-end rounded-full bg-gray-200 p-4">
                                                        <Bookmark className="text_primary size-6"/>
                                                    </div>
                                                    <div className="">
                                                        <h2 className="text-xl font-semibold ">Book Complaint</h2>
                                                        <p className="">Explore services around you.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="relative mt-4 flex-col text-white lg:flex">
                        <div className="inset-0 " />
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <div className="flex max-w-xl flex-row gap-10">
                                <Image
                                    src="/images/map.png"
                                    width={800}
                                    height={800}
                                    alt="map"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
