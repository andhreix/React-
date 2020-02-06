import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Caroussel from "../components/Caroussel";
import Carouselitem from "../components/Carouselitem";
import "../assets/styles/App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Search />

      <Categories>
        <Caroussel>
          <Carouselitem />
          <Carouselitem />
          <Carouselitem />
          <Carouselitem />
        </Caroussel>
      </Categories>
    </div>
  );
};

export default App;
