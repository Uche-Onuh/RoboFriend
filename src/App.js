import { useState, useEffect } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

function App() {
  const [searchfield, setSearchfield] = useState("");
  const [robotsArray, setRobotsArray] = useState(robots);

  const onChange = (e) => {
    setSearchfield(e.target.value);
    const filteredRobot = robotsArray.filter((robot) =>
      robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
    );
    setRobotsArray(filteredRobot);
  };

  return (
    <div className="tc">
      <h1 className="h1">RoboFriends</h1>
      <SearchBox onChange={onChange} />
      <CardList robots={robotsArray} />
    </div>
  );
}

export default App;
