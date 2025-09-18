import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer mt-5 py-4 text-white"
      style={{
        backgroundImage: "url('https://i.gifer.com/7SvH.gif')", // bisa ganti GIF lain
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderTop: "2px solid rgba(255,255,255,0.3)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Overlay biar teks tetap terbaca */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      />

      <div className="d-flex justify-content-center align-items-center flex-column gap-2 position-relative" style={{ zIndex: 2 }}>
        <a
          href="https://github.com/Kikiviell/ReactJS-AES-Encryption"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
          style={{ transition: "transform 0.3s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <FaGithub size={32} />
        </a>

        <small className="text-light text-center" style={{ fontSize: "0.9rem" }}>
          © {currentYear} <span style={{ color: "#0d6efd" }}>Made with ♥</span> by{" "}
          <strong>Kiki Viell</strong>
        </small>
      </div>
    </footer>
  );
}

export default Footer;
