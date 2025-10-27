import "./globals.css";

export const metadata = {
  title: "SupremeGroup Next.js App",
  description: "Created with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
