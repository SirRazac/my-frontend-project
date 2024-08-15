// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React, { Component } from "react";

// ------------------------------------------------------------------------------
// CSS
// ------------------------------------------------------------------------------
import "../../styles/MemeGenerator.css";

// ------------------------------------------------------------------------------
// Class
// ------------------------------------------------------------------------------
class MemeGenerator extends Component {
  state = {
    surpriseMode: false,
    errorMessage: "",
  };

  handleClick = () => {
    this.setState({ surpriseMode: true });
    setTimeout(() => {
      const errors = [
        "System Error: 0x80004005",
        "Fehler: Unerwarteter Systemabsturz",
        "Erreur Système: 0xDEADBEEF",
        "Ошибка системы: 0xCAFEBABE",
        "システムエラー: 0xBADF00D",
      ];
      this.setState({
        errorMessage: errors[Math.floor(Math.random() * errors.length)],
      });
    }, 2000);

    setTimeout(() => {
      this.setState({ errorMessage: "Rebooting..." });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }, 6000);
  };

  componentDidUpdate() {
    if (this.state.surpriseMode) {
      this.flickerEffect = setInterval(() => {
        document.body.classList.toggle("flicker");
      }, 100);
    } else {
      clearInterval(this.flickerEffect);
    }
  }

  render() {
    return (
      <div
        className={`MemeGenerator ${
          this.state.surpriseMode ? "hide-navbar-footer" : ""
        }`}
      >
        {this.state.surpriseMode ? (
          <div className="blue-screen">
            <h1>:(</h1>
            <p>{this.state.errorMessage}</p>
          </div>
        ) : (
          <button onClick={this.handleClick}>Generate Meme</button>
        )}
      </div>
    );
  }
}

export default MemeGenerator;
