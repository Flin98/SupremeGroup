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
      {/* Heading dynamic */}
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
        <div className="hidden lg:flex flex-col justify-between h-[608px]">
          <div className="flex justify-between h-[408px]">
            {/* Left div */}
            <div className="flex flex-col justify-end h-full text-left">
              <h1 className="text-[#0067B1] text-3xl font-semibold mb-1">
                Passenger vehicles
              </h1>
              <p className="text-white mb-6">
                Revving up Nonwoven innovation from interior to exterior.
              </p>
            </div>

            {/* Right div/ carousel with videos */}
            <div
              className="relative overflow-hidden rounded-lg cursor-pointer h-[608px] w-[1063.73px]"
              onClick={handlePassengerClick}
            >
              {loading1 ? (
                <div className="flex items-center justify-center h-full w-full text-gray-400">
                  Loading passenger Vehicle videos...
                </div>
              ) : passengerVideos.length > 0 ? (
                <div className="h-full w-full flex items-center justify-center bg-black">
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
              ) : (
                <div className="flex items-center justify-center h-full w-full text-gray-400">
                  No passenger Vehicle videos available.
                </div>
              )}
            </div>
          </div>

          {/* Image Selector Buttons for Passenger Vehicles - desktop only */}
          {!loading1 && passengerVideos.length > 0 && (
            <div
              className="flex mt-4 relative justify-center"
              
            >
              {passengerVideos.slice(0, 5).map((video, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveSlide1(index);
                  }}
                  style={{
                    width: "103px",
                    height: "112px",
                    padding: 0,
                    margin: 0,
                    border:
                      index === activeSlide1
                        ? "3px solid #0067B1"
                        : "2px solid transparent",
                    background: "none",
                    outline: "none",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  aria-label={`Select Video ${index + 1}`}
                >
                  <img
                    src={video.imageSrc}
                    alt={video.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                      userSelect: "none",
                      pointerEvents: "none",
                    }}
                    draggable={false}
                  />
                  {index === activeSlide1 && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-26px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        whiteSpace: "nowrap",
                        color: "#0067B1",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                    >
                      {video.title}
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Medium and small screen: stack text and carousel vertically */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-6">
          <h1 className="text-[#0067B1] text-3xl font-semibold">
            Passenger vehicles
          </h1>
          <p className="text-white max-w-xs mx-auto mb-6">
            Revving up Nonwoven innovation from interior to exterior.
          </p>

          <div
            className="relative overflow-hidden rounded-lg cursor-pointer h-[540.25px] w-full max-w-[1063.73px]"
            onClick={handlePassengerClick}
          >
            {loading1 ? (
              <div className="flex items-center justify-center h-full w-full text-gray-400">
                Loading passenger Vehicle videos...
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
              </>
            ) : (
              <div className="flex items-center justify-center h-full w-full text-gray-400">
                No passenger Vehicle videos available.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Commercial vehicles section, similarly responsive */}
      <div className="w-full max-w-[1082px]">
        <div className="hidden lg:flex flex-col justify-between h-[608px]">
          <div className="flex justify-between items-start h-[408px]">
            <div className="max-w-xs text-left">
              <h1 className="text-[#0067B1] text-3xl font-semibold mb-1">
                Commercial vehicles
              </h1>
              <p className="text-white mb-6">
                Advancing Nonwoven engineering for heavy-duty vehicles.
              </p>
            </div>

            <div
              className="relative overflow-hidden rounded-lg cursor-pointer h-[608px] w-[1063.73px]"
              onClick={handleCommercialClick}
            >
              {loading2 ? (
                <div className="flex items-center justify-center h-full w-full text-gray-400">
                  Loading commercial Vehicle videos...
                </div>
              ) : commercialVideos.length > 0 ? (
                <div className="h-full w-full flex items-center justify-center bg-black">
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
              ) : (
                <div className="flex items-center justify-center h-full w-full text-gray-400">
                  No commercial Vehicle videos available.
                </div>
              )}
            </div>
          </div>

          {/* Image Selector Buttons for Commercial Vehicles - desktop only */}
          {!loading2 && commercialVideos.length > 0 && (
            <div
              className="flex mt-4 relative justify-center gap-4"
            >
              {commercialVideos.slice(0, 3).map((video, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveSlide2(index);
                  }}
                  style={{
                    width: "103px",
                    height: "112px",
                    padding: 0,
                    margin: 0,
                    border:
                      index === activeSlide2
                        ? "3px solid #0067B1"
                        : "2px solid transparent",
                    background: "none",
                    outline: "none",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  aria-label={`Select Video ${index + 1}`}
                >
                  <img
                    src={video.imageSrc}
                    alt={video.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                      userSelect: "none",
                      pointerEvents: "none",
                    }}
                    draggable={false}
                  />
                  {index === activeSlide2 && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-26px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        whiteSpace: "nowrap",
                        color: "#0067B1",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                    >
                      {video.title}
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Commercial vehicles stacked for smaller screens */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-6">
          <h1 className="text-[#0067B1] text-3xl font-semibold">
            Commercial vehicles
          </h1>
          <p className="text-white max-w-xs mx-auto mb-6">
            Advancing Nonwoven engineering for heavy-duty vehicles.
          </p>

          <div
            className="relative overflow-hidden rounded-lg cursor-pointer h-[540.25px] w-full max-w-[1063.73px]"
            onClick={handleCommercialClick}
          >
            {loading2 ? (
              <div className="flex items-center justify-center h-full w-full text-gray-400">
                Loading commercial Vehicle videos...
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
              </>
            ) : (
              <div className="flex items-center justify-center h-full w-full text-gray-400">
                No commercial Vehicle videos available.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
