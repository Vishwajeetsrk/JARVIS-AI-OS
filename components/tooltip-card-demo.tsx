"use client";
import { Tooltip } from "@/components/ui/tooltip-card";
import React from "react";

export default function TooltipCardDemo() {
  return (
    <div className="mx-auto max-w-2xl p-4 md:p-10 text-neutral-300">
      <p className="text-sm">
        There was a problem with the server. Once{" "}
        <Tooltip
          containerClassName="text-cyan-400 font-bold"
          content="AWS markets itself as the 'world's most comprehensive and broadly adopted cloud platform' offering over 200 fully featured services globally."
        >
          <span className="underline decoration-cyan-500/50">AWS</span>
        </Tooltip>{" "}
        went down, we had to quickly migrate to a new provider. AWS in general
        is a great service, but sometimes it&apos;s not available.
      </p>
      <p className="mt-8 text-sm">
        The server was administered by{" "}
        <Tooltip
          containerClassName="text-cyan-400 font-bold"
          content={<TooltipCard />}
        >
          {" "}
          <span className="cursor-pointer underline decoration-cyan-500/50">Tyler Durden.</span>
        </Tooltip>{" "}
        Tyler has been with us for a long time. He is a great asset to the team
        and sometimes tries to act in different ways which can be difficult to
        manage.{" "}
      </p>

      <p className="mt-8 text-sm">
        That is when we approached Tyler for a cute little{" "}
        <Tooltip
          containerClassName="text-cyan-400 font-bold"
          content={<TestimonialCard />}
        >
          {" "}
          <span className="cursor-pointer underline decoration-cyan-500/50">testimonial.</span>
        </Tooltip>{" "}
        Instead of a testimonial, he started yapping about project mayhem and
        how we should be using our skills to build a better future.
      </p>
    </div>
  );
}

const TooltipCard = () => {
  return (
    <div className="w-56">
      <img
        src="https://assets.aceternity.com/screenshots/tyler.webp"
        alt="Tyler Durden"
        className="aspect-square w-full rounded-lg object-cover mb-2"
      />
      <div className="flex flex-col">
        <p className="text-sm font-bold text-white">Tyler Durden</p>
        <p className="mt-0.5 text-xs text-neutral-400">
          Soap Developer from a Tier 3 college. Enthusiastic and exhibits
          entrepreneurial spirit.
        </p>
      </div>
    </div>
  );
};

const TestimonialCard = () => {
  return (
    <div className="w-60">
      <blockquote className="mb-3 text-xs italic text-neutral-300">
        &ldquo;This product is absolutely, grade A awesome.&rdquo;
      </blockquote>
      <div className="flex items-center gap-2">
        <img
          src="https://assets.aceternity.com/screenshots/tyler.webp"
          alt="Tyler Durden"
          className="h-7 w-7 rounded-full object-cover"
        />
        <div>
          <p className="text-xs font-bold text-white">
            Tyler Durden
          </p>
          <p className="text-[10px] text-neutral-400">
            Senior Product Manager at FC
          </p>
        </div>
      </div>
    </div>
  );
};
