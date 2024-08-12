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
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputValue)}`;
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
                aria-label="Inhalt eingeben"
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
        <div className="mt-3 text-center">
          {this.state.qrCodeUrl && (
            <div className="mb-3">
              <img
                src={this.state.qrCodeUrl}
                alt="Generierter QR-Code"
                className="border border-dark mb-3"
              />
            </div>
          )}
          <div className="alert alert-info">
            <h5 className="alert-heading">Welche Informationen sind im QR-Code enthalten?</h5>
            <p>Der QR-Code enthält den Text oder die URL, die im Eingabefeld eingegeben wird. Jeglicher eingegebener Inhalt, wird als QR-Code verarbeitet</p>
            <h5 className="alert-heading">Wozu kann ich den QR-Code verwenden?</h5>
            <p>QR-Codes sind nützlich, um Informationen schnell zu teilen, Websites zu besuchen oder Produkte zu verlinken. Du kannst mit einem QR-Code-Scanner auf Deinem Smartphone gescannt werden, um die darin enthaltenen Informationen sofort zu erhalten.</p>
            <h5 className="alert-heading">Wie erstelle ich hier einen QR-Code?</h5>
            <p>Gib einfach den gewünschten Text oder die URL in das Eingabefeld ein und klicke auf "Hier klicken". Der QR-Code wird sofort erstellt und angezeigt.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default QrCode;
