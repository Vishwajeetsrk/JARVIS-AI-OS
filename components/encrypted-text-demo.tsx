import { EncryptedText } from "@/components/ui/encrypted-text";
import React from "react";

export default function EncryptedTextDemo() {
  return (
    <div className="mx-auto flex max-w-lg items-center justify-center p-6 text-neutral-800 dark:text-neutral-200">
      <p className="text-left text-sm leading-relaxed">
        You are not your job, you&apos;re not how much money you have in the
        bank. You are not the car you drive. You&apos;re not the contents of
        your wallet. You are not your fucking khakis.{" "}
        <EncryptedText
          text="All singing, all dancing crap of the world."
          encryptedClassName="text-cyan-500 font-mono"
          revealedClassName="text-neutral-900 dark:text-white font-bold"
        />
      </p>
    </div>
  );
}

export { EncryptedTextDemo as EncryptedTextDemoExport };
