import React, { useState, useEffect } from "react";
import "./spells.css";

const Spells = () => {
  const [spells, setSpells] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSpells, setFilteredSpells] = useState([]);

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await fetch("https://hp-api.herokuapp.com/api/spells");
        if (!response.ok) {
          throw new Error("Failed to fetch spells");
        }
        const data = await response.json();
        setSpells(data);
      } catch (error) {
        console.error("Error fetching spells:", error);
      }
    };

    fetchSpells();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();

    if (query.length < 4) {
      alert("Please enter at least 4 letters.");
      return;
    }

    const filteredResults = spells.filter(
      (spell) =>
        spell.name.toLowerCase().includes(query) ||
        spell.description.toLowerCase().includes(query)
    );

    if (filteredResults.length === 0) {
      alert("No spells found. Search again...");
    } else {
      setFilteredSpells(filteredResults);
    }
  };

  return (
    <div className="spell-section">
      <div className="container text-center">
        <div className="spell-title">
          <h2>Spells</h2>
          <form onSubmit={handleSearch} className="search-form">
            <input
              className="search-input"
              type="search"
              placeholder="Search spell..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
            />
            <button className="search-button" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="name-description-box">
          {filteredSpells.length > 0 ? (
            filteredSpells.map((spell) => (
              <div key={spell.id} className="spell-item">
                <strong className="spell-name">{spell.name}</strong>
                <span className="spell-description">{spell.description}</span>
              </div>
            ))
          ) : (
            <p className="default-msg">Search Spell!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Spells;
