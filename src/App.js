import { useState, useEffect } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

function App() {

  const [searchField, setSearchField] = useState("");
  const [robotsArray, setRobotsArray] = useState(robots);

  return (
    <div className="tc">
      <h1 className="h1">RoboFriends</h1>
      <SearchBox />
      <CardList robots={robots} />
    </div>
  );
}

export default App;
