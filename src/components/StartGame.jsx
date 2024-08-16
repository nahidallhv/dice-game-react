import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="image-container">
        <img src="/images/dices.png" alt="dices" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;


  .content {
    h1 {
      font-size: 95px;
      white-space: nowrap;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    /* justify-content: center; */
    margin-top: 150px;
    
    .image-container {
      img {
        max-width: 250px;
      }
    }

    .content {
      h1 {
        font-size: 50px;
        text-align: center;
      }
    }
  }
`;
