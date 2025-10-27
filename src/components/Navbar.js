"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        // Always show navbar at top
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setShowNavbar(false);
      } else {
        // Scrolling up - show navbar
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-white shadow-md sticky top-0 z-50 transform transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center relative">
          {/* Logo */}
          <div className="shrink-0">
            <div
              className="h-8 w-32 flex items-center justify-center
              sm:h-8 sm:w-32
              md:h-10 md:w-36
              lg:h-11 lg:w-[146px]
              xl:h-[41px] xl:w-[146px]"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-8 xl:space-x-10">
            {/* Desktop Buttons (hidden on small screens) */}
            <div className="hidden sm:flex items-center space-x-4">
              <button
                className="
              flex items-center justify-center
              bg-[#5CD6FF] text-black
              h-[50px]
              w-auto min-w-20 sm:min-w-[100px] md:min-w-[145px]
              rounded-[100px]
              py-1.5 sm:py-2 md:py-2.5
              px-3 sm:px-[15px] md:px-5
              font-semibold text-base
              transition
            "
              >
                Contact Us
              </button>

              <button className="px-4 py-2 flex items-center justify-center">
                <img
                  src="/linkedin.png"
                  alt="LinkedIn"
                  className="h-5 w-5 mr-2"
                />
              </button>

                <button className="px-4 py-2 flex items-center justify-center">
                <img
                  src="/translation.png"
                  alt="Language"
                  className="h-5 w-10 mr-2"
                />
              </button>
            </div>

            {/* Burger menu button (shown only on small screens) */}
            <button
              className="sm:hidden flex items-center justify-center p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {/* Simple burger icon */}
              <svg
                className="h-6 w-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M3 12h18M3 6h18M3 18h18"
                  }
                />
              </svg>
            </button>

            {/* Show menu links on burger open (small screens) */}
            {menuOpen && (
              <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 sm:hidden z-50 rounded-b-md">
                <button className="block w-full text-left mb-2 py-2 px-4 rounded hover:bg-[#5CD6FF] hover:text-black font-semibold">
                  Contact Us
                </button>
                <button className="px-4 py-2 flex items-center justify-center">
                  LinkedIn
                </button>
                <button className="px-4 py-2 flex items-center justify-center">
                  Language
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}



// "use client";
// import { useState } from "react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="w-full h-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20 relative">
//           {/* Logo */}
//           <div className="shrink-0">
//             <div
//               className="h-8 w-32 flex items-center justify-center
//             sm:h-8 sm:w-32
//             md:h-10 md:w-36
//             lg:h-11 lg:w-[146px] 
//             xl:h-[41px] xl:w-[146px]"
//             >
//               {/* Replace with your logo */}
//               <img
//                 src="/logo.png"
//                 alt="Logo"
//                 className="h-full w-full object-contain"
//               />
//             </div>
//           </div>

//           {/* Navigation Items */}
//           <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-8 xl:space-x-10">
//             {/* Desktop Buttons (hidden on small screens) */}
//             <div className="hidden sm:flex items-center space-x-4">
//               <button
//                 className="
//               flex items-center justify-center
//               bg-[#5CD6FF] text-black
//               h-[50px]
//               w-auto min-w-20 sm:min-w-[100px] md:min-w-[145px]
//               rounded-[100px]
//               py-1.5 sm:py-2 md:py-2.5
//               px-3 sm:px-[15px] md:px-5
//               font-semibold text-base
//               transition
//             ">
//                 Contact Us
//               </button>
//               <button className="px-4 py-2 flex items-center justify-center">
//                 <img
//                   src="/linkedin.png"
//                   alt="LinkedIn"
//                   className="h-5 w-5 mr-2"
//                 />
//               </button>
//               <button className="px-4 py-2 flex items-center justify-center">
//                 <img
//                   src="/translation.png"
//                   alt="Language"
//                   className="h-5 w-10 mr-2"
//                 />
//               </button>
//             </div>

//             {/* Burger menu button (shown only on small screens) */}
//             <button
//               className="sm:hidden flex items-center justify-center p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
//               onClick={() => setMenuOpen(!menuOpen)}
//               aria-label="Toggle menu"
//             >
//               {/* Simple burger icon */}
//               <svg
//                 className="h-6 w-6 text-gray-700"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path
//                   d={
//                     menuOpen
//                       ? "M6 18L18 6M6 6l12 12"
//                       : "M3 12h18M3 6h18M3 18h18"
//                   }
//                 />
//               </svg>
//             </button>

//             {/* Show menu links on burger open (small screens) */}
//             {menuOpen && (
//               <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 sm:hidden z-50 rounded-b-md">
//                 <button className="block w-full text-left mb-2 py-2 px-4 rounded hover:bg-[#5CD6FF] hover:text-black font-semibold">
//                   Contact Us
//                 </button>
//                 <button className="px-4 py-2 flex items-center justify-center">
//                   LinkedIn
//                 </button>
//                  <button className="px-4 py-2 flex items-center justify-center">
//                   Language
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
