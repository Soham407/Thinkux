"use client";

export function PillButtons() {
  const scrollToFooter = () => {
    document
      .getElementById("site-footer")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex justify-center px-6 py-10">
      <div className="flex items-center justify-between gap-10 rounded-full bg-gray-100 pl-8 pr-2 py-2 w-full max-w-md">
        <span className="text-base font-semibold tracking-tight whitespace-nowrap">
          <span className="text-[color:var(--brand-blue)]">THINK</span>{" "}
          <span className="text-black">UX</span>
        </span>
        <button
          type="button"
          onClick={scrollToFooter}
          className="rounded-full bg-[color:var(--brand-blue)] px-7 py-3 text-sm font-semibold text-white whitespace-nowrap transition hover:brightness-110"
        >
          Build With Us
        </button>
      </div>
    </div>
  );
}
