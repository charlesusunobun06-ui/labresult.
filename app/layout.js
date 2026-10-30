import "./globals.css";

export const metadata = {
  title: "LabResult Diagnostics | Get your lab results online",
  description: "Collect your lab results securely online. LabResult Diagnostics, Benin City.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="nav">
          <a href="/" className="brand">LabResult</a>
          <nav>
            <a href="/tests">Tests</a>
            <a href="/login" className="btn small">Login</a>
          </nav>
        </header>
        {children}
        <footer>LabResult Diagnostics · Ring Road, Benin City · 0800 000 0000 · Mon-Sat 7am-6pm</footer>
      </body>
    </html>
  );
}
