import { useState } from "react";

export default function MediaUpload() {
  const [file, setFile] = useState(null);

  const handleFile = (f) => {
    if (!f) return;
    setFile({
      url: URL.createObjectURL(f),
      type: f.type,
      name: f.name,
    });
  };

  const onDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  return (
    <div
      className="upload-dropzone"
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
    >
      <input
        type="file"
        accept="image/*,video/*"
        hidden
        id="mediaInput"
        onChange={(e) => handleFile(e.target.files[0])}
      />

      {!file && (
        <label htmlFor="mediaInput">
          <p>📷 Drop image / 🎥 video here</p>
          <span>or click to upload</span>
        </label>
      )}

      {file && (
        <div className="preview">
          {file.type.startsWith("image") && (
            <img src={file.url} alt="preview" />
          )}

          {file.type.startsWith("video") && (
            <video src={file.url} controls />
          )}

          <p>{file.name}</p>
        </div>
      )}
    </div>
  );
}
