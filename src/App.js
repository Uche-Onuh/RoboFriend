import { useMemo, useState } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

function App() {
  const robotsArray = robots;
  const [query, setQuery] = useState("");



   const filteredRobot = useMemo(() => (
    robotsArray.filter((robot) =>
      robot.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )
   ), [robotsArray, query])

   

  return (
    <div className="tc">
      <h1 className="h1">RoboFriends</h1>
      <SearchBox onChange={(e) => setQuery(e.target.value)} value={query} />
      <CardList robots={filteredRobot} />
    </div>
  );
}

export default App;
