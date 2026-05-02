import React, { useState } from "react";

// Base domain used for the shortened URL
const BASE_DOMAIN = "https://cpt405.co/";

// Generate a random 6-character code if the user did not provide one
function generateCode() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

function Home() {
  const [longUrl, setLongUrl] = useState("");
  const [shortCode, setShortCode] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleShorten = () => {
    // Reset previous output
    setError("");
    setShortUrl("");

    const trimmedUrl = longUrl.trim();
    if (trimmedUrl === "") {
      setError("Please enter a long URL.");
      return;
    }

    // Use the custom code if provided, otherwise generate one
    const code = shortCode.trim() !== "" ? shortCode.trim() : generateCode();
    setShortUrl(BASE_DOMAIN + code);
  };

  return (
    <div className="card">
      <h1 className="title">Link Shrinker</h1>

      <label className="field-label" htmlFor="long-url">Long URL:</label>
      <input
        id="long-url"
        type="text"
        className="field-input"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        placeholder="https://example.com/some/very/long/path"
      />

      <label className="field-label" htmlFor="short-code">Enter short code:</label>
      <input
        id="short-code"
        type="text"
        className="field-input"
        value={shortCode}
        onChange={(e) => setShortCode(e.target.value)}
        placeholder="(optional) e.g. react101"
      />

      <div className="button-row">
        <button className="primary-btn" onClick={handleShorten}>Shorten</button>
      </div>

      {error && <p className="error-msg">{error}</p>}

      {shortUrl && (
        <div className="result-section">
          <h3 className="result-label">Short URL</h3>
          <div className="result-box">
            <strong>{shortUrl}</strong>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
