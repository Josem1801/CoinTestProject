import ListOfCoins from "src/components/ListOfCoins";
import TrendingCoins from "src/components/TrendingCoins";
import React from "react";
import "./home.css";
function Home() {
  return (
    <div className="home">
      <TrendingCoins />
      <ListOfCoins />
      <footer></footer>
    </div>
  );
}

export default Home;
