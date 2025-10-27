"use client";
import { useState, useEffect } from "react";

export default function CarouselSection() {
  const [passengerVideos, setPassengerVideos] = useState([]);
  const [commercialVideos, setCommercialVideos] = useState([]);
  const [activeSlide1, setActiveSlide1] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res1 = await fetch("/api/PassengerVehicles");
        const data1 = await res1.json();
        setPassengerVideos(data1);
        setLoading1(false);

        const res2 = await fetch("/api/CommercialVehicles");
        const data2 = await res2.json();
        setCommercialVideos(data2);
        setLoading2(false);
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      }
    }
    fetchVideos();
  }, []);

  // Handlers to cycle videos
  const handlePassengerClick = () => {
    if (passengerVideos.length === 0) return;
    setActiveSlide1((prev) => (prev + 1) % passengerVideos.length);
  };
  const handleCommercialClick = () => {
    if (commercialVideos.length === 0) return;
    setActiveSlide2((prev) => (prev + 1) % commercialVideos.length);
  };

  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center space-y-16 px-4 py-16 max-w-[1920px] mx-auto">
      {/* Heading (same on all screen sizes) */}
     <div
  className="mx-auto flex flex-col items-center justify-center px-4"
  style={{
    maxWidth: "778.24px",
    height: "132px",
    paddingTop: "72.51px",
    paddingBottom: "72.51px",
  }}
>
  <p className="text-center font-manrope text-[48px] leading-[100%] tracking-[-0.5%] font-light sm:font-normal md:font-light">
    Evolving the drive with{" "}
    <span className="font-semibold text-[48px] leading-[100%] tracking-[-0.5%]">
      360-degree
    </span>{" "}
    nonwoven solutions
  </p>
</div>


      {/* Passenger vehicles section */}
      <div className="w-full max-w-[1082px]">
        <div className="hidden lg:flex justify-between h-[408px]">
          {/* Left side text */}
          <div className="flex flex-col justify-end h-full text-left">
            <h1 className="text-[#0067B1] text-3xl font-semibold mb-1">Passenger vehicles</h1>
            <p className="text-white mb-6">Revving up Nonwoven innovation from interior to exterior.</p>
          </div>

          {/* Right side carousel with video and dots */}
          <div
            className="relative overflow-hidden rounded-lg cursor-pointer h-[608px] w-[1063.73px]"
            onClick={handlePassengerClick}
          >
            {loading1 ? (
              <div className="flex items-center justify-center h-full w-full text-gray-400">
                Loading passenger videos...
              </div>
            ) : passengerVideos.length > 0 ? (
              <>
                <div className="h-full w-full flex flex-col items-center justify-center text-center p-6 transition-opacity duration-500 opacity-100">
                  <div className="mt-6 bg-black flex items-center justify-center text-white w-full h-full">
                    {passengerVideos[activeSlide1].src ? (
                      <video
                        src={passengerVideos[activeSlide1].src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="max-w-full max-h-full object-contain"
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    ) : (
                      "Video Placeholder"
                    )}
                  </div>
                  <h3 className="font-semibold text-lg md:text-xl mt-4 mb-2">
                    {passengerVideos[activeSlide1].title}
                  </h3>
                </div>

                <div className="flex justify-center mt-4 space-x-2">
                  {passengerVideos.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveSlide1(index);
                      }}
                      className={`rounded-full bg-[#0067B1] ${
                        index === activeSlide1 ? "w-6 h-3 rounded-[20px]" : "w-3 h-3"
                      } transition-all duration-300`}
                      aria-label={`Go to passenger video ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full w-full text-gray-400">
                No passenger videos available.
              </div>
            )}
          </div>
        </div>

        {/* Medium and small screen: stack text and carousel vertically */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-6">
          <h1 className="text-[#0067B1] text-3xl font-semibold">Passenger vehicles</h1>
          <p className="text-white max-w-xs mx-auto mb-6">
            Revving up Nonwoven innovation from interior to exterior.
          </p>

          <div
            className="relative overflow-hidden rounded-lg cursor-pointer h-[540.25px] w-full max-w-[1063.73px]"
            onClick={handlePassengerClick}
          >
            {loading1 ? (
              <div className="flex items-center justify-center h-full w-full text-gray-400">
                Loading passenger videos...
              </div>
            ) : passengerVideos.length > 0 ? (
              <>
                <div className="h-full w-full flex flex-col items-center justify-center text-center p-6 transition-opacity duration-500 opacity-100">
                  <div className="mt-6 bg-black flex items-center justify-center text-white w-full h-full">
                    {passengerVideos[activeSlide1].src ? (
                      <video
                        src={passengerVideos[activeSlide1].src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="max-w-full max-h-full object-contain"
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    ) : (
                      "Video Placeholder"
                    )}
                  </div>
                  <h3 className="font-semibold text-lg md:text-xl mt-4 mb-2">
                    {passengerVideos[activeSlide1].title}
                  </h3>
                </div>

                <div className="flex justify-center mt-4 space-x-2">
                  {passengerVideos.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveSlide1(index);
                      }}
                      className={`rounded-full bg-[#0067B1] ${
                        index === activeSlide1 ? "w-6 h-3 rounded-[20px]" : "w-3 h-3"
                      } transition-all duration-300`}
                      aria-label={`Go to passenger video ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full w-full text-gray-400">
                No passenger videos available.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Commercial vehicles section, similarly responsive */}
      <div className="w-full max-w-[1082px]">
        <div className="hidden lg:flex justify-between items-start">
          <div className="max-w-xs text-left">
            <h1 className="text-[#0067B1] text-3xl font-semibold mb-1">Commercial vehicles</h1>
            <p className="text-white mb-6">Advancing Nonwoven engineering for heavy-duty vehicles.</p>
          </div>

          <div
            className="relative overflow-hidden rounded-lg cursor-pointer h-[608px] w-[1063.73px]"
            onClick={handleCommercialClick}
          >
            {loading2 ? (
              <div className="flex items-center justify-center h-full w-full text-gray-400">
                Loading commercial videos...
              </div>
            ) : commercialVideos.length > 0 ? (
              <>
                <div className="h-full w-full flex flex-col items-center justify-center text-center p-6 transition-opacity duration-500 opacity-100">
                  <div className="mt-6 bg-black flex items-center justify-center text-white w-full h-full">
                    {commercialVideos[activeSlide2].src ? (
                      <video
                        src={commercialVideos[activeSlide2].src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="max-w-full max-h-full object-contain"
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    ) : (
                      "Video Placeholder"
                    )}
                  </div>
                  <h3 className="font-semibold text-lg md:text-xl mt-4 mb-2">
                    {commercialVideos[activeSlide2].title}
                  </h3>
                </div>

                <div className="flex justify-center mt-4 space-x-2">
                  {commercialVideos.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveSlide2(index);
                      }}
                      className={`rounded-full bg-[#0067B1] ${
                        index === activeSlide2 ? "w-6 h-3 rounded-[20px]" : "w-3 h-3"
                      } transition-all duration-300`}
                      aria-label={`Go to commercial video ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full w-full text-gray-400">
                No commercial videos available.
              </div>
            )}
          </div>
        </div>

        <div className="lg:hidden flex flex-col items-center text-center space-y-6">
          <h1 className="text-[#0067B1] text-3xl font-semibold">Commercial vehicles</h1>
          <p className="text-white max-w-xs mx-auto mb-6">
            Advancing Nonwoven engineering for heavy-duty vehicles.
          </p>

          <div
            className="relative overflow-hidden rounded-lg cursor-pointer h-[540.25px] w-full max-w-[1063.73px]"
            onClick={handleCommercialClick}
          >
            {loading2 ? (
              <div className="flex items-center justify-center h-full w-full text-gray-400">
                Loading commercial videos...
              </div>
            ) : commercialVideos.length > 0 ? (
              <>
                <div className="h-full w-full flex flex-col items-center justify-center text-center p-6 transition-opacity duration-500 opacity-100">
                  <div className="mt-6 bg-black flex items-center justify-center text-white w-full h-full">
                    {commercialVideos[activeSlide2].src ? (
                      <video
                        src={commercialVideos[activeSlide2].src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="max-w-full max-h-full object-contain"
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    ) : (
                      "Video Placeholder"
                    )}
                  </div>
                  <h3 className="font-semibold text-lg md:text-xl mt-4 mb-2">
                    {commercialVideos[activeSlide2].title}
                  </h3>
                </div>

                <div className="flex justify-center mt-4 space-x-2">
                  {commercialVideos.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveSlide2(index);
                      }}
                      className={`rounded-full bg-[#0067B1] ${
                        index === activeSlide2 ? "w-6 h-3 rounded-[20px]" : "w-3 h-3"
                      } transition-all duration-300`}
                      aria-label={`Go to commercial video ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full w-full text-gray-400">
                No commercial videos available.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
