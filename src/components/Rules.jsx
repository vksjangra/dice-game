import styled from "styled-components";

const Rules = () => {
  return (
        <RulesContainer>
            <h2>How to play dice game</h2>
            <div className="text">
                <p>Select any numer</p>
                <p>Click on the dice image</p>
                <p>After clicking on the dice, if dice number is equal to the selected number, you will get same points as dice</p>
                <p>If you get the wrong guess, 2 points will be deducted</p>
            </div>
        </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    background-color: #fbf1f1;
    padding: 20px;
    margin-top: 40px;
    border-radius: 10px;
    h2 {
        font-size: 24px;
    }
    .text {
        margin-top: 24px;
    }
`;