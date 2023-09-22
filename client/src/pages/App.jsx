import SaleCard from "../components/cards/saleCard/saleCard";
import Container from "../components/container/container";
import Subtitle from "../components/forms/subtitle/subtitle";
import Nav from "../components/nav/Nav";
import "./App.css";

const App = () => {
  return (
    <div>
      <Nav />
      <Container>
        <Subtitle>promoções</Subtitle>
        <div classname="saleContainer">
          <SaleCard
            title={"League of Legends"}
            precoCheio={199.9}
            desconto={30}
          />
          <SaleCard title={"Dota 2"} precoCheio={199.9} desconto={30} />
          <SaleCard title={"valorant"} precoCheio={199.9} desconto={30} />
        </div>
      </Container>
    </div>
  );
};

export default App;
