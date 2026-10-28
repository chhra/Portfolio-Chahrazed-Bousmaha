import React from "react";

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <p className="copyright">© 2026 Chahrazed Bousmaha</p>

        <ul className="footer-links">
          {/* Email link with fallback title tracking */}
          <li>
            <a
              href="mailto:sharrah.bousmaha@gmail.com"
              className="cursor-pointer text-white hover:text-pink-500 transition"
            >
              Email
            </a>
          </li>

          <li>
            <a
              href="https://linkedin.com/in/chahrazed-bousmaha-b62a25331"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/chhra" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
