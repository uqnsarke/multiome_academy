export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/multiome.png"
          alt="Multiome Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Light cinematic gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none z-0"></div>

      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-white text-5xl font-bold">
          Let's learn multiome analysis from scratch!
        </h1>
      </div>

    </div>
  );
}
