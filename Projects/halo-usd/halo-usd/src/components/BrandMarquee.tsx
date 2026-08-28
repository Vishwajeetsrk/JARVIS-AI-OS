import type { BrandStyle } from "../constants";

type BrandMarqueeProps = {
  brands: BrandStyle[];
  trackClass: string;
  itemSpacing?: string;
  itemClassName?: string;
};

export default function BrandMarquee({
  brands,
  trackClass,
  itemSpacing = "mx-7",
  itemClassName = "text-black/60",
}: BrandMarqueeProps) {
  const items = brands.map((brand) => (
    <span
      key={brand.name}
      className={`${itemSpacing} shrink-0 whitespace-nowrap ${itemClassName}`}
      style={{
        fontFamily: brand.fontFamily,
        fontWeight: brand.fontWeight,
        letterSpacing: brand.letterSpacing,
        fontSize: brand.fontSize,
        fontStyle: brand.fontStyle,
        textTransform: brand.textTransform as React.CSSProperties["textTransform"],
      }}
      data-editable
      data-preset-text={`brand-${brand.name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {brand.name}
    </span>
  ));

  return (
    <div className="w-full overflow-hidden">
      <div className={trackClass}>
        {items}
        {items}
      </div>
    </div>
  );
}
