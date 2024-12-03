import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './App.css';

function App() {
    const tokenAddress = "0xb11cE69dd74B263c9FEC3f2fa9ad47a170Fe9ec5";
    const whitepaperLink = "https://docs.google.com/document/d/18_Sc_IZ-0C3fbMD2jiK2qL9IJbJUAXpluRu6HwfExo0/edit?usp=sharing";
  const [copyStatus, setCopyStatus] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(tokenAddress);
    setCopyStatus("Copied!");
    setTimeout(() => setCopyStatus(""), 2000); // Clear message after 2 seconds
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Phantom</h1>
        <p>Cross-Border Transactional PoS (Proof-of-Stake) Protocol</p>
        <p>Donate to our project</p>

        <div className="cta-section">
          <a
            href={whitepaperLink}
            download
            className="download-link"
          >
            Download Whitepaper
          </a>
        </div>

        <div className="donation-section">
          <h2>Donate to Our Token Address</h2>
          <div className="token-address-container">
            <code className="token-address">{tokenAddress}</code>
            <button onClick={handleCopy} className="copy-button">
              Copy
            </button>
          </div>
          {copyStatus && <p className="copy-status">{copyStatus}</p>}

          <div className="qr-code-section">
            <h3>Scan to Donate</h3>
            <QRCode
              value={tokenAddress}
              size={200}
              bgColor="#ffffff"
              fgColor="#61dafb"
              level="Q"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
