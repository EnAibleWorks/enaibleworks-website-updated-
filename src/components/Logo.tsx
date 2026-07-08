import logoUrl from "@/assets/enaibleworks-logo.png";
export function Logo({ className = "", variant = "header" }: { className?: string; variant?: "header" | "footer" }) {
  const widthPx = 230;
  return (
    <div className={`flex items-center ${variant === "header" ? "shrink-0" : ""} ${className}`}>
      <img
        src={logoUrl}
        alt="EnAibleWorks — Enable Solutions. Empower Success."
        className="block object-contain"
        style={{ width: `${widthPx}px`, height: "auto" }}
      />
    </div>
  );
}
