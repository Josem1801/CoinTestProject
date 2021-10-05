import Header from "components/Header";
import ListOfCoins from "components/ListOfCoins";
import TrendingCoins from "components/TrendingCoins";
import React from "react";
import "./home.css";
function Home() {
  return (
    <div className="home">
      <Header />
      <TrendingCoins />
      <ListOfCoins />
      <footer></footer>
    </div>
  );
}

export default Home;
