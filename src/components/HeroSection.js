export default function HeroSection() {
  return (
    <section className="relative overflow-hidden w-full h-[600px]">
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
        <video
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
          src="/automotive.mp4"
          type="video/mp4"
        >
          Sorry, your browser does not support embedded videos.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 font-manrope">
        <p className="font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[100%] tracking-[0] text-center mb-4">
          Performance in motion
        </p>
        <p className="font-semibold text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-8 sm:leading-10 md:leading-12 lg:leading-[58px] tracking-[-0.5%] text-center mb-4">
          Soft Trims and <span className="text-[#5CD6FF]">NVH Solutions</span>
        </p>
        <p className="font-light text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-8 sm:leading-10 md:leading-12 lg:leading-[58px] tracking-[-0.5%] text-center">
          for seamless rides
        </p>
      </div>
    </section>
  );
}


