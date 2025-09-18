import React from "react";
import { FaKey } from "react-icons/fa";

function InputKey({ privateKey, setPrivateKey }) {
  const isValid = [16, 24, 32].includes(privateKey.length);

  // Daftar meme gif
  const gifs = [
    "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif", // dancing cat
    "https://media.giphy.com/media/3o7abldj0b3rxrZUxW/giphy.gif", // pepe laughing
    "https://media.giphy.com/media/Ih7mL0A5Ygr6w/giphy.gif", // keyboard cat
    "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif", // funny dance
  ];

  // Ambil gif random
  const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

  return (
    <div
      className="mb-4 text-start p-4 rounded-4 shadow-sm"
      style={{
        backgroundImage: `url('${randomGif}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Overlay biar teks tetap terbaca */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          borderRadius: "12px",
          padding: "16px",
        }}
      >
        <label
          htmlFor="privateKey"
          className="form-label fw-semibold"
          style={{ fontSize: "0.95rem" }}
        >
          🔑 Private Key (16/24/32 characters)
        </label>

        <div style={{ position: "relative" }}>
          {/* Icon kunci */}
          <FaKey
            style={{
              position: "absolute",
              top: "50%",
              left: "12px",
              transform: "translateY(-50%)",
              color: isValid ? "#198754" : "#6c757d",
            }}
          />

          {/* Input */}
          <input
            type="text"
            className="form-control rounded-3 ps-5 py-2 shadow-sm"
            id="privateKey"
            value={privateKey}
            onChange={(e) => setPrivateKey(e.target.value)}
            placeholder="Enter your private key"
            style={{
              border: isValid ? "2px solid #198754" : "1px solid #ced4da",
              transition: "all 0.3s ease",
            }}
          />
        </div>

        {/* Hint bawah */}
        <small
          className="mt-1 d-block"
          style={{ color: isValid ? "#198754" : "#dc3545" }}
        >
          {isValid
            ? "✅ Key length valid!"
            : "❌ Must be exactly 16, 24, or 32 characters."}
        </small>
      </div>
    </div>
  );
}

export default InputKey;
