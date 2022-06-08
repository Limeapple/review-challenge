import Reviews from "./Reviews";
import { useState } from "react";

const ReviewSection = () => {
  const [sortBy, setSortBy] = useState("Place");

  return (
    <div id='reviews'>
      <header
        style={{
          color: "hsla(38, 95%, 50%, 1)",
          fontSize: 40,
          fontWeight: "bold",
          marginTop: 30,
          textAlign: "left",
          paddingLeft: "3%",
        }}>
        Reviews
      </header>
      <div style={{ display: "flex", paddingLeft: "3%" }}>
        <div style={{ padding: 7, margin: 5, alignSelf: "center", color: "gray" }}>Sort By:</div>
        <ul style={{ listStyle: "none", display: "flex", paddingLeft: 0 }}>
          <li
            style={sortBy === "Place" ? sortByButtonsActive : sortByButtons}
            onClick={() => setSortBy("Place")}>
            Place
          </li>
          <li
            style={sortBy === "Rating" ? sortByButtonsActive : sortByButtons}
            onClick={() => setSortBy("Rating")}>
            Rating
          </li>
          <li
            style={sortBy === "Date" ? sortByButtonsActive : sortByButtons}
            onClick={() => setSortBy("Date")}>
            Date
          </li>
        </ul>
      </div>

      <Reviews sortBy={sortBy} />
    </div>
  );
};

const sortByButtons = {
  padding: 7,
  margin: 3,
  border: "1px solid hsla(38, 95%, 50%, 1)",
  borderRadius: 10,
  cursor: "pointer",
};

const sortByButtonsActive = {
  padding: 7,
  margin: 3,
  background: "hsla(38, 95%, 50%, 1)",
  borderRadius: 10,
  cursor: "pointer",
  color: "white",
};

export default ReviewSection;
