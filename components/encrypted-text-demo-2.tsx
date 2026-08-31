import { EncryptedText } from "@/components/ui/encrypted-text";
import React from "react";

export default function EncryptedTextDemoSecond() {
  return (
    <p className="mx-auto max-w-lg py-10 text-left text-lg font-mono">
      <EncryptedText
        text="Welcome to the Matrix, Neo."
        encryptedClassName="text-neutral-500"
        revealedClassName="dark:text-white text-black font-semibold"
        revealDelayMs={50}
      />
    </p>
  );
}

export { EncryptedTextDemoSecond as EncryptedTextDemo2 };
