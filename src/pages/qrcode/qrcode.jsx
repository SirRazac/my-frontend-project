// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React, { Component } from "react";

// ------------------------------------------------------------------------------
// Class
// ------------------------------------------------------------------------------
class QrCode extends Component {
  state = {
    inputValue: "",
    qrCodeUrl: "",
  };
  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };
  handleButtonClick = async () => {
    const { inputValue } = this.state;
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
      inputValue
    )}`;
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        this.setState({ qrCodeUrl: apiUrl });
      } else {
        console.error("Error fetching QR code:", response.statusText);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };
  render() {
    return (
      <div className="container d-flex flex-column align-items-center vh-100 bg-light p-4">
        <h1>QR-Code-Generator</h1>
        <div className="row w-100">
          <div className="col-12 col-md-8 col-lg-6 mx-auto mt-5">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control border-dark"
                placeholder="Inhalt eingeben"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                value={this.state.inputValue}
                onChange={this.handleInputChange}
              />
              <button
                className="btn btn-outline-dark"
                type="button"
                id="button-addon1"
                onClick={this.handleButtonClick}
              >
                Hier klicken
              </button>
            </div>
          </div>
        </div>
        {this.state.qrCodeUrl && (
          <div className="mt-3">
            <img
              src={this.state.qrCodeUrl}
              alt="QR Code"
              className="border border-dark"
            />
          </div>
        )}
      </div>
    );
  }
}

export default QrCode;
