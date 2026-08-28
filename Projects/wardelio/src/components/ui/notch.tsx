"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";

export const Notch = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn("relative flex justify-center", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        layout
        className={cn(
          "relative flex h-7 w-24 items-center justify-center rounded-full bg-black px-3 py-1 dark:bg-white",
          isHovered && "w-auto min-w-[140px]"
        )}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <AnimatePresence mode="wait">
          {isHovered ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2 text-xs font-medium text-white dark:text-black"
            >
              {children || <span>Dynamic Island</span>}
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-2 w-16 rounded-full bg-neutral-800 dark:bg-neutral-200"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export const NotchContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative mx-auto flex h-[600px] w-full max-w-sm flex-col overflow-hidden rounded-[3rem] border-8 border-black bg-white shadow-2xl dark:border-neutral-800 dark:bg-black",
        className
      )}
    >
      <div className="absolute left-1/2 top-2 z-10 -translate-x-1/2">
        <Notch />
      </div>
      <div className="flex-1 pt-10">{children}</div>
    </div>
  );
};
