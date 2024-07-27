"use client";

import Image from "next/image";
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import InquiryForm from "@/components/InquiryFrom";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york/ui/dialog";

import bannerImage from '../public/images/banner2.webp';
import zerobImage from '../public/icons/zerob.webp';
import eurekaImage from '../public/icons/eureka.webp';
import { ShieldCheck, ThumbsUp, Settings, ArrowRight, Users } from "lucide-react";

export default function Banner() {
  const [submitting, setIsSubmitting] = useState(false);
  const [inquiry, setInquiry] = useState({
    username: "",
    mobile: "",
    note: "",
    complaintType: "",
    model: "",
    name:"",
  });
  const [open, setOpen] = useState(false);

  const createInquiry = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/inquiry/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Inquiry has been registered successfully! 🔥");
        setInquiry({
          username: "",
          mobile: "",
          note: "",
          model:"",
          inquiryType:"",
          name:"",
        });
        setTimeout(() => setOpen(false), 2000);
      } else {
        console.error("Failed to register inquiry.");
      }
    } catch (error) {
      console.error("An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#183EC2,_#EAEEFE_60%)] pb-0 pt-8 md:pt-5">
      <div className="container px-4">
        <div className="md:flex md:items-center">
          <div className="md:w-[478px]">
            <div className="inline-flex rounded border border-[#222]/10 bg-slate-200 px-3 py-1 text-sm tracking-tighter">
              - Your Trusted Water Purification Partner
            </div>
            <h1 className="text-shadow mt-6 bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-5xl font-bold tracking-tighter text-transparent">
              Clean and Safe <span className="text-primary1">Water</span> <br className="hidden sm:inline" />
              <span className="text-primary1">Purification</span> Solutions
            </h1>
            <motion.p
              variants={slideInFromLeft(0.8)}
              className="mt-4 max-w-2xl text-sm leading-normal text-slate-700 sm:text-xl sm:leading-8"
            >
              Experience pure and fresh water with our advanced purification services. Reliable solutions for your home and office.
            </motion.p>
            <div className="mt-7 flex gap-2 md:flex-row">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="btn btn-primary">Service Request</Button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl">
                  <DialogTitle className="text-slate-700">Get the list of best <span className="text-xl text-indigo-500">Water Purifier Repair & Services </span></DialogTitle>

                  <div className="flex flex-col md:flex-row">
                    <div className="hidden items-center justify-center md:flex md:w-1/2">
                      <Image
                        src={bannerImage}
                        alt="Banner"
                        layout="responsive"
                        width={460}
                        height={460}
                        className="rounded-md object-cover"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <InquiryForm
                        type="Create"
                        inquiry={inquiry}
                        setInquiry={setInquiry}
                        submitting={submitting}
                        handleSubmit={createInquiry}
                      />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Button className="btn btn-text flex items-center gap-1 bg-transparent text-black hover:text-white">
                <span>Know More</span>
                <ArrowRight alt="arrow image" width={20} height={20} className="size-4" />
              </Button>
            </div>
          </div>
          <div className="relative mt-20 md:mt-0 md:h-[648px] md:flex-1">
            <div className="relative mt-10 md:mt-0 md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex items-center justify-center md:justify-end"
              >
                <div className="relative sm:mt-0 md:mt-7 md:h-[548px] md:flex-1">
                  <Image
                    src="/images/image-1.png"
                    alt="banner"
                    height={260}
                    width={260}
                    objectFit="contain"
                    className="md:absolute md:left-10 md:h-full md:w-auto md:max-w-none"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>  
      </div>
      <div className="container px-4">
  
        
          <div className=" p-2 md:p-6">
            <div className="container mt-5">              
              <div className="relative flex justify-center overflow-hidden">
                
                <div className="animate-marquee flex flex-nowrap gap-14">
                  <Image
                    src="/assets/logo-pulse.png"
                    width={50}
                    height={50}
                    alt="brand image"
                    className="h-7 w-auto px-4"
                  />
                  <Image
                    src={zerobImage}
                    width={50}
                    height={50}
                    alt="brand image"
                    className="h-7 w-auto px-4"
                  />
                  <Image
                    src="/icons/icon2.jpg"
                    width={50}
                    height={50}
                    alt="brand image"
                    className="h-7 w-auto px-4"
                  />
                  <Image
                    src={eurekaImage}
                    width={50}
                    height={50}
                    alt="brand image"
                    className="h-7 w-auto px-4"
                  />
                  <Image
                    src="/icons/icon2.svg"
                    width={50}
                    height={50}
                    alt="brand image"
                    className="h-7 w-auto px-4"
                  />
                
                </div>
              </div>
            </div>
            
         
          <div className="container mt-10">
            <div className="flex flex-col items-center justify-center rounded-lg p-4 md:flex-row md:p-8">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                <div className="relative overflow-hidden rounded-lg border-white bg-[#4548b9] p-2 hover:border-[#4548b9] hover:shadow-lg">
                  <div className="flex flex-row items-center gap-2 rounded-md  p-4">
                    <ShieldCheck className="size-8 text-white"/>
                    <div className="space-y-2">
                      <h1 className="text-sm font-bold text-white">
                        Trusted by <br /> 1 Lakh+ users
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-lg border-white bg-[#4548b9] p-2 hover:border-[#0000ff] hover:shadow-lg">
                  <div className="flex flex-row items-center gap-2 rounded-md p-4">
                    <Settings className="size-8 text-white"/>
                    <div className="space-y-2">
                      <h1 className="text-sm font-bold text-white">
                        Assured 48-hours <br /> Installation
                      </h1>
                    </div>
                  </div>
                </div>
                
                <div className="relative overflow-hidden rounded-lg border-white bg-[#4548b9] p-2 hover:border-[#0000ff] hover:shadow-lg">
                  <div className="flex flex-row items-center gap-2 rounded-md p-4">
                    <ThumbsUp className="size-8 text-white"/>
                    <div className="space-y-2">
                      <h1 className="text-sm font-bold text-white">
                        1 Year Service <br /> Guarantee
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg border-white bg-[#4548b9] p-2 hover:border-[#0000ff] hover:shadow-lg">
                  <div className="flex flex-row items-center gap-2 rounded-md p-4">
                    <Users className="size-8 text-white"/>
                    <div className="space-y-2">
                      <h1 className="text-sm font-bold text-white">
                        24*7 Help Line <br /> Service
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
         
        </div>
        <div className="relative hidden h-screen w-full bg-cover bg-center py-5 md:block" style={{ backgroundImage: 'url(/images/banner-bg.jpg)' }}>
          <div className="absolute inset-0  opacity-50"></div>
          </div>
    </div>
    </section>
  );
}
