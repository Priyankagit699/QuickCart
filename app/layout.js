import "../styles/globals.css";

export const metadata = {
  title: "QuickCart | Everyday finds, made simple",
  description:
    "Browse quality products and find exactly what you need with QuickCart.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
