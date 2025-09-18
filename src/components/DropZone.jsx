import React from "react";

function DropZone({
  file,
  fileName,
  fileInputRef,
  handleFileChange,
  setFile,
  setFileName,
}) {
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Daftar gif lucu
  const gifs = [
    "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif", // dancing cat
    "https://media.giphy.com/media/3o7abldj0b3rxrZUxW/giphy.gif", // pepe laughing
    "https://media.giphy.com/media/Ih7mL0A5Ygr6w/giphy.gif", // keyboard cat
    "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif", // funny dance
  ];

  // Ambil random gif
  const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

  return (
    <div className="mb-4">
      <div
        className={`card drop-zone rounded-3 text-center p-4 ${
          file ? "bg-light" : "bg-white"
        }`}
        style={{
          cursor: "pointer",
          backgroundImage: !file ? `url(${randomGif})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          overflow: "hidden",
        }}
        onClick={handleButtonClick}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          const droppedFile = e.dataTransfer.files[0];
          if (droppedFile) {
            setFile(droppedFile);
            setFileName(droppedFile.name);
          }
        }}
      >
        {!file ? (
          <div
            className="d-flex justify-content-center flex-column gap-2"
            style={{
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <i className="bi bi-file-earmark-arrow-up-fill text-primary display-1"></i>
            <small className="text-secondary m-0">
              Drag and drop or click to browse file
            </small>
          </div>
        ) : (
          <div>
            <p
              className="fw-bold text-primary m-0 text-truncate"
              style={{ maxWidth: "100%", overflow: "hidden" }}
              title={fileName}
            >
              {fileName}
            </p>
          </div>
        )}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        className="d-none"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default DropZone;
