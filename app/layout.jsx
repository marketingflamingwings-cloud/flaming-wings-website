import "./globals.css";

export const metadata = {
  title: "Flaming Wings Schaumburg | 25+ Halal Wing Flavors",
  description: "Best halal chicken wings in Schaumburg, IL. 25+ bold flavors, combos, sandos, loaded tender fries, and online ordering.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
