import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark" | "white";
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({
  variant = "white",
  className = "",
  width = 180,
  height = 48,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 group transition-opacity hover:opacity-95 ${className}`}
      aria-label="Akshaya Business IT Solutions Home"
    >
      <div className="relative flex items-center">
        {/* We have both official Akshaya_blue-1.svg and Akshaya_white.png in public/brand */}
        {variant === "white" ? (
          <>
            <div className="logo-dark-variant flex items-center">
              {/* High fidelity container with white logo on dark navbar/footer */}
              <Image
                src="/brand/Akshaya_white.png"
                alt="Akshaya Business IT Solutions"
                width={width}
                height={height}
                className="h-10 w-auto object-contain drop-shadow-[0_2px_10px_rgba(32,109,247,0.2)]"
                priority
              />
            </div>
            <div className="logo-light-variant hidden items-center">
              {/* Crisp blue/dark logo on light navbar/footer */}
              <Image
                src="/brand/Akshaya_blue-1.svg"
                alt="Akshaya Business IT Solutions"
                width={width}
                height={height}
                className="h-10 w-auto object-contain"
                priority
              />
            </div>
          </>
        ) : (
          <div className="flex items-center bg-surface p-1.5 rounded-lg border border-theme/60">
            <Image
              src="/brand/Akshaya_blue-1.svg"
              alt="Akshaya Business IT Solutions"
              width={width}
              height={height}
              className="h-9 w-auto object-contain"
              priority
            />
          </div>
        )}
      </div>
    </Link>
  );
}
