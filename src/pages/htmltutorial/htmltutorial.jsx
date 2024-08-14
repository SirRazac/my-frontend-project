// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React, { Component } from "react";

// ------------------------------------------------------------------------------
// Class
// ------------------------------------------------------------------------------
class HtmlTutorial extends Component {
  state = {};
  render() {
    return (
      <>
        <h4>Hier ist eine kleine Mini-Tabelle mit HTML:</h4>
<table align="left" border="1">
  <tr>
    <td>Test 1</td>
    <td>Test 2</td>
  </tr>
  <tr>
    <td>Test 3</td>
    <td>Test 4</td>
  </tr>
</table>
<br /><br />
<form action="mailto:mail@fabiankipp.de" method="POST">
  <input type="text" placeholder="Deine Nachricht" />
  <input type="submit" value="Absenden" />
</form>
<br /><br />
<h4>Verstehen, wie <u>Formulare</u> funktionieren:</h4>
<ol>
    <li>Browser zeigt ein Formular auf dem Client-Computer an.</li>
    <li>Benutzer füllt das Formular aus und drückt auf die Schaltfläche <em>Senden</em>.</li>
    <li>Browser sendet die im Formular erfassten Daten an einen Server.</li>
    <li>Server verarbeitet und speichert die Daten und sendet eine Antwort an den Clien-Computer.</li>
    <li>Browser zeigt die Antwort an, die normalerweise angibt, ob die Übermittlung erfolgreich war.</li>
</ol>
      </>
    );
  }
}

export default HtmlTutorial;
