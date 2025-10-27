'use client';

export default function Footer() {
  const footerLinks = [
    {
      title: "Applications",
      links: ["Apparel", "Automotive", "Filtration", "Customised Solutions"],
    },
    {
      title: "Company",
      links: ["Innovation", "Global Competency", "About Us", "Contact Us"],
    },
    {
      title: "more",
      links: ["Careers", "Privacy Policy", "Terms and Conditions"],
    },
    {
      title: "Follow Us",
      links: ["Twitter", "LinkedIn", "Instagram", "Medium"],
    },
  ];

  return (
    <footer className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo Section */}
        <div className="mb-8">
          <div className="h-12 w-40">
            {/* Replace with your logo */}
            <img
              src="/logo.png"
              alt="Logo"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-black">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Company Address */}
        <div className="flex justify-between items-center text-gray-400 mt-40">
          <p className="text-lg font-semibold">©2023. All Rights Reserved.</p>
          <p className="text-lg font-semibold">
            Supreme House: 110, 16th Road, Chembur, Mumbai – 400071.
          </p>
        </div>
      </div>

      {/* Watermark Image */}
      <img
        src="/watermark.png"
        alt="Watermark"
        className="pointer-events-none absolute right-0 opacity-20"
        style={{
          width: "450px",
          height: "445px",
          objectFit: "none",
          objectPosition: "left top",
          bottom: "20px",
          zIndex: 50,
        }}
      />
    </footer>
  );
}
