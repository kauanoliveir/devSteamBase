import GameCard from "../components/cards/gameCard/gameCard";
import SaleCard from "../components/cards/saleCard/saleCard";
import Container from "../components/container/container";
import Subtitle from "../components/forms/subtitle/subtitle";
import Nav from "../components/nav/Nav";
import "./App.css";

import { cartState } from "../atoms/cart";
import { useRecoilState } from "recoil";

const App = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const handleAddProduct = (info) => {
    setCart([...cart, info]);
  };
  console.log(cart);
  return (
    <div>
      <Nav />
      <Container>
        <Subtitle>promoções</Subtitle>
        <div className="saleContainer">
          <SaleCard
            title={"League of Legends"}
            fullPrice={199.9}
            discount={30}
            onAdd={() =>
              handleAddProduct({
                name: "League of Legends",
                price: 99.9,
                img: "League of Legends",
              })
            }
          />
          <SaleCard
            title={"Dota 2"}
           fullPrice={199.9}
           discount={30}
            onAdd={() =>
              handleAddProduct({
                name: "Dota 2",
                price: 99.9,
                img: "Dota 2",
              })
            }
          />
          <SaleCard
            title={"valorant"}
           fullPrice={199.9}
           discount={30}
            onAdd={() =>
              handleAddProduct({
                name: "valorant",
                price: 99.9,
                img: "valorant",
              })
            }
          />
        </div>

        <div className="gameSession">
          <Subtitle>Outros Jogos:</Subtitle>
          <div className="gameContainer">
            <GameCard
              title={"CSGO"}
              info={"Ação, Estratégia e Multijogador"}
              price={99.9}
              onAdd={() =>
                handleAddProduct({
                  name: "Counter strike: Global Offensive",
                  price: 99.9,
                  img: "CSGO",
                })
              }
            >
              Counter Strike: Global Offensive
            </GameCard>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default App;
