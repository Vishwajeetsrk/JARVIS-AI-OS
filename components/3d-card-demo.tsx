"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-neutral-900/90 relative group/card border-white/20 w-auto sm:w-[30rem] h-auto rounded-2xl p-6 border shadow-2xl backdrop-blur-xl">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-300 text-sm max-w-sm mt-2"
        >
          Hover over this card to unleash the power of 3D CSS perspective transforms.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl shadow-2xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-12">
          <CardItem
            translateZ={20}
            as="a"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-cyan-400 hover:text-cyan-300"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-cyan-500 text-black text-xs font-bold shadow-lg shadow-cyan-500/30 hover:bg-cyan-400"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
