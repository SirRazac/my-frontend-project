// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React, { useState } from "react";

// ------------------------------------------------------------------------------
// Class
// ------------------------------------------------------------------------------
const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Recipe = () => {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    const formattedIngredients = encodeURIComponent(ingredients.trim());
    const url = `https://gustar-io-deutsche-rezepte.p.rapidapi.com/search_api?text=${formattedIngredients}`;

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "a86e5ae0e6mshd0b44e1c0d45919p1e96b5jsn3e873f3c45ed",
        "x-rapidapi-host": "gustar-io-deutsche-rezepte.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      console.log("API Response:", result);

      if (Array.isArray(result) && result.length > 0) {
        // Mische die Rezepte zufällig und wähle die ersten 9 aus
        const shuffledRecipes = shuffleArray(result);
        setRecipes(shuffledRecipes.slice(0, 9));
        console.log(shuffledRecipes.slice(0, 9));
      } else {
        setRecipes([]);
        setError("Keine Rezepte gefunden.");
      }
    } catch (error) {
      setError(`Fehler beim Abrufen der Rezepte: ${error.message}`);
      console.error("Fehler:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOnKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Rezeptsuche</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Geben Sie Zutaten ein, z.B. Tomaten, Käse"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          onKeyDown={handleOnKey}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Suche
        </button>
      </div>
      {loading && <p className="text-center">Laden...</p>}
      {error && <p className="text-center text-danger">{error}</p>}
      {recipes.length > 0 && (
        <div className="row mt-4">
          {recipes.map((recipe, index) => (
            <div
              className="col-md-4 col-sm-6 col-12"
              key={index}
              style={{ marginBottom: "1rem" }}
            >
              <div className="card" style={{ width: "100%", height: "100%" }}>
                <img
                  src={
                    recipe.image_urls && recipe.image_urls.length > 0
                      ? recipe.image_urls[0]
                      : "default-image-url.jpg"
                  }
                  className="card-img-top"
                  alt={recipe.title || "Kein Titel verfügbar"}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {recipe.title || "Kein Titel verfügbar"}
                  </h5>
                  <a
                    href={recipe.source}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Zum Rezept
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Recipe;
