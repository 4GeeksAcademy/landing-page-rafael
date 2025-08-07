import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const cardsData = [
  {
    title: "Título 1",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sapiente esse necessitatibus neque.",
    imageUrl: "",  // Sin imagen, aparece el placeholder
    linkUrl: "https://ejemplo1.com"
  },
  {
    title: "Título 2",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto",
    imageUrl: "",  // Sin imagen, aparece el placeholder
    linkUrl: "https://ejemplo2.com"
  },
  {
    title: "Título 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitabus neque.",
    imageUrl: "",  // Sin imagen, aparece el placeholder
    linkUrl: "https://ejemplo3.com"
  },
  {
    title: "Título 4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicabo magni, sapiente tempore debitis beatae culpa natus architecto.",
    imageUrl: "",  // Sin imagen, aparece el placeholder
    linkUrl: "https://ejemplo4.com"
  }
];

const Home = () => (
  <>
    <Navbar />
    <div className="container mt-4">
      <Jumbotron />
      <div className="row mt-4">
        {cardsData.map((card, index) => (
          <div className="col-md-3" key={index}>
            <Card
              title={card.title}
              text={card.text}
              imageUrl={card.imageUrl}
              linkUrl={card.linkUrl}
            />
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </>
);

export default Home;


