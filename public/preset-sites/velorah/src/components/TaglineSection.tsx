export function TaglineSection() {
  return (
    <section
      id="tagline"
      className="flex min-h-[70vh] items-center justify-center bg-[hsl(0,0%,0%)] px-6"
    >
      <h2
        className="font-heading max-w-4xl text-center text-4xl leading-[1.05] tracking-[-1.5px] text-foreground sm:text-6xl md:text-7xl"
        data-editable
      >
        So you can feel at home,
        <br />
        anywhere.
      </h2>
    </section>
  );
}
