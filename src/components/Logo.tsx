import logoAsset from "@/assets/enaibleworks-logo.png.asset.json";

export function Logo({ className = "", variant = "header" }: { className?: string; variant?: "header" | "footer" }) {
  const widthPx = 230;
  return (
    <div className={`flex items-center ${variant === "header" ? "shrink-0" : ""} ${className}`}>
      <img
        src={logoAsset.url}
        alt="EnAibleWorks — Enable Solutions. Empower Success."
        className="block object-contain"
        style={{ width: `${widthPx}px`, height: "auto" }}
      />
    </div>
  );
}
