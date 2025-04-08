import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useEffect, useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
    const [showRules, setShowRules] = useState(false);
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");

    const generateRandomNumber = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    };

    useEffect(() => {
        setError("");
    }, [selectedNumber]);

    const rollDice = () => {

        if ((selectedNumber > 0 && selectedNumber <= 6)){
            setError("");
            const randomNumber = generateRandomNumber(1,6);
            setCurrentDice(prev=>randomNumber);

            if (currentDice === selectedNumber){
                setScore(prev=>prev+currentDice);
            } else {
                setScore(prev=>prev-2);
            }
            setSelectedNumber(0);
        } else {
            setError("You have not selected any number");
        }
    };

    const resetScore = () => {
        setScore(0);
    };

    const handleRules = () => {
        setShowRules(prevState => !prevState);
    }

    return (
        <MainContainer>
            <div className="top_section">
                <TotalScore score={score}/>
                <NumberSelector error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
            </div>
            <RollDice currentDice={currentDice} rollDice={rollDice}/>
            <div className="btns">
                <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
                <Button onClick={handleRules}>{showRules ? "Hide Rules" : "Show Rules"}</Button>
            </div>
            {showRules ? <Rules /> : ""}
        </MainContainer>
    );
};

export default GamePlay;

const MainContainer = styled.div`
    padding-top: 70px;
    .top_section {
        display: flex;
        align-items: end;
        justify-content: space-around;
    }

    .btns {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-top: 40px;
    }

`;