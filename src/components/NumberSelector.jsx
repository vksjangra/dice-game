import styled from "styled-components";

const NumberSelector = ( { error, selectedNumber, setSelectedNumber } ) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    

    return (
        <NumberSelectorContainer>
            <p className="error">{error}</p>
            <div className="flex">
                {arrNumber.map(e=>(<Box isSelected={e === selectedNumber} key={e} onClick={() => setSelectedNumber(e)}>{e}</Box>))}
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
        font-size: 24px;
        font-weight: 700;
    }

    .error {
        color: red;
    }
`;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${({isSelected}) => isSelected? "black":"white"};
    color: ${({isSelected}) => isSelected? "white":"black"};
`;