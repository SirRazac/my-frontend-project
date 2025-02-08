import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const ArbeitszeitRechner = () => {
  const [startzeit, setStartzeit] = useState("");
  const [endzeit, setEndzeit] = useState("");
  const [pauseMinuten, setPauseMinuten] = useState("");
  const [ergebnis, setErgebnis] = useState("");

  const handleBerechneArbeitszeit = () => {
    try {
      const effArbeitszeit = berechneArbeitszeit(startzeit, endzeit, parseInt(pauseMinuten));
      setErgebnis(`Effektive Arbeitszeit: ${effArbeitszeit.toFixed(2)} Stunden`);
    } catch (error) {
      setErgebnis("Fehler bei der Berechnung. Bitte überprüfe deine Eingaben.");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Startzeit (HH:MM):</Text>
      <TextInput
        style={styles.input}
        value={startzeit}
        onChangeText={setStartzeit}
        placeholder="07:00"
      />

      <Text>Endzeit (HH:MM):</Text>
      <TextInput
        style={styles.input}
        value={endzeit}
        onChangeText={setEndzeit}
        placeholder="15:30"
      />

      <Text>Pausenzeit (Minuten):</Text>
      <TextInput
        style={styles.input}
        value={pauseMinuten}
        onChangeText={setPauseMinuten}
        placeholder="30"
        keyboardType="numeric"
      />

      <Button title="Arbeitszeit berechnen" onPress={handleBerechneArbeitszeit} />
      {ergebnis ? <Text style={styles.ergebnis}>{ergebnis}</Text> : null}
    </View>
  );
};

function parseTime(timeStr) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  const now = new Date();
  now.setHours(hours, minutes, 0, 0);
  return now;
}

function berechneArbeitszeit(startzeit, endzeit, pauseMinuten) {
  const start = parseTime(startzeit);
  let end = parseTime(endzeit);
  if (end <= start) {
    end.setDate(end.getDate() + 1);
  }
  const diffMs = end - start;
  const diffStunden = diffMs / (1000 * 3600);
  const pause = pauseMinuten / 60;
  return diffStunden - pause;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10
  },
  ergebnis: {
    marginTop: 20,
    fontSize: 18
  }
});

export default ArbeitszeitRechner;
