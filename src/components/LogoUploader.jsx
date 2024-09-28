import React, { useState } from 'react';
import '../styles/LogoUploader.css'; 

const LogoUploader = ({ logo, setLogo }) => {
    const [logoSize, setLogoSize] = useState(100);
    const [isEditingLogo, setIsEditingLogo] = useState(true);
  
    const handleLogoChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setLogo(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleLogoRemove = () => {
      setLogo(null);
      setIsEditingLogo(true);
    };
  
    const handleSizeChange = (e) => {
      setLogoSize(Number(e.target.value));
    };
  
    const handleDone = () => {
      setIsEditingLogo(false);
    };
  
    return (
      <div className="logo-container">
        {logo ? (
          <div className="logo-box">
            <img
              src={logo}
              alt="Logo"
              className="logo"
              style={{ width: `${logoSize}px`, height: `${logoSize}px` }}
            />
            {isEditingLogo ? (
              <>
                <button className="btn btn-secondary logo-remove-btn" onClick={handleLogoRemove}>
                  ×
                </button>
                <input
                  type="range"
                  min="50"
                  max="300"
                  value={logoSize}
                  onChange={handleSizeChange}
                  className="form-control mt-2 logo-size-slider"
                />
                <button className="btn btn-primary mt-2" onClick={handleDone}>
                  Done
                </button>
              </>
            ) : (
              <button className="btn btn-secondary logo-remove-btn mt-2" onClick={() => setIsEditingLogo(true)}>
                Edit
              </button>
            )}
          </div>
        ) : (
          <div className="logo-box">
            <h1>Your Logo</h1>
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoChange}
              className="form-control mt-2"
            />
          </div>
        )}
      </div>
    );
  };
  
  export default LogoUploader;