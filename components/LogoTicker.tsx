import React from 'react';
import Image from 'next/image';

function LogoTicker() {
  return (
    <div className="relative overflow-hidden bg-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="[mask-image:linear-gradient(to_right, transparent, black, transparent)] relative overflow-hidden">
          <div className="absolute inset-0 flex items-center">
            <div className="animate-marquee flex flex-none gap-14">
              <Image
                src="/assets/logo-acme.png"
                width={60}
                height={60}
                alt="brand image"
                className="h-9 w-auto"
              />
              <Image
                src="/assets/logo-apex.png"
                width={60}
                height={60}
                alt="brand image"
                className="h-9 w-auto"
              />
              <Image
                src="/assets/logo-pulse.png"
                width={60}
                height={60}
                alt="brand image"
                className="h-9 w-auto"
              />
              <Image
                src="/assets/logo-quantum.png"
                width={60}
                height={60}
                alt="brand image"
                className="h-9 w-auto"
              />
              <Image
                src="/assets/logo-pulse.png"
                width={60}
                height={60}
                alt="brand image"
                className="h-9 w-auto"
              />
              <Image
                src="/assets/logo-pulse.png"
                width={60}
                height={60}
                alt="brand image"
                className="h-9 w-auto"
              />
              {/* Repeat as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoTicker;
