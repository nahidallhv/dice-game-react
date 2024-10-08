import styled from "styled-components";

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
max-width: 200px;
text-align: center;
  h1 {
    font-size: 80px;
    line-break: 80px;
    color: #420202;

  }
  p {
    font-size: 25px;
    font-weight: 700;
    color: #420202;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 50px;
      color: #420202;
    }

    p {
      font-size: 18px;
      color: #420202;
    }
  }
`;
