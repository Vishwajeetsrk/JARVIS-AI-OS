const HERO_VIDEO =
  "https://res.cloudinary.com/dfonotyfb/video/upload/v1775585556/dds3_1_rqhg7x.mp4";

export default function HeroVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 z-0 h-full w-full object-cover"
    >
      <source src={HERO_VIDEO} type="video/mp4" />
    </video>
  );
}
