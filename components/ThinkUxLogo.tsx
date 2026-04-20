import Image from "next/image";
import Link from "next/link";

export function ThinkUxLogo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Think UX home" className={`inline-block ${className}`}>
      <Image
        src="/assets/Logo.png"
        alt="Think UX"
        width={108}
        height={120}
        priority
        className="h-auto w-[72px] md:w-[84px]"
      />
    </Link>
  );
}
