import "./globals.css";

export const metadata = {
  title: "Positivity Radio - 100% Positive. 100% Free.",
  description: "The world's only family of Positivity Radio stations. Discover your own personal soundtrack to a more positive life.",
  keywords: "positivity radio, positive music, free radio, noel edmonds, wellness, meditation, happy music",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}