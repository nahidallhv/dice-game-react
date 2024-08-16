import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, index) => (
          <Box
            isSelected={value === selectedNumber}
            key={index}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    color: #420202;
    font-size: 24px;
    font-weight: 600;
    padding-top: 10px;
  }
  .error {
    color: red;
    font-size: 18px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      align-items: center;
      .flex {
        gap: 16px;
      }
      p {
        font-size: 13px;
        color: #420202;
      }
    }
  }
`;

const Box = styled.div`
  cursor: pointer;
  height: 70px;
  width: 70px;
  border: 2px solid;
  border-radius: 15px;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "#420202" : "white")};
  color: ${(props) => (!props.isSelected ? "#420202" : "white")};

  @media (max-width: 768px) {
    height: 35px;
    width: 35px;
    font-size: 15px;
  }
`;
