import './App.css';
import MasterPage from './components/MasterPage/MasterPage';
import {useState} from 'react';
import Box from './components/Box/Box';

function App() {

    const [gameState, setGameState] = useState({
        activeUser: "X",
        winner: "",
        boxStates: new Array(9).fill(""),
        disabled: false
    });

    const checkAllValSame = (valtoCheck, val1, val2, val3) => {
        return (val1 === valtoCheck && val2 === valtoCheck && val3 === valtoCheck);
    }

    const isGameOver = (boxValArr) => {
        let gameOver = true;
        boxValArr.forEach(element => {
            if(element === "") {
                gameOver = false;
                return;
            }
        });
        return gameOver;
    }

    const checkWinner = (boxValArr) => {
        let winner = "";

        // condition check for X
        if(checkAllValSame("X", boxValArr[0], boxValArr[1], boxValArr[2])) winner = "X";
        if(checkAllValSame("X", boxValArr[3], boxValArr[4], boxValArr[5])) winner = "X";
        if(checkAllValSame("X", boxValArr[6], boxValArr[7], boxValArr[8])) winner = "X";

        if(checkAllValSame("X", boxValArr[0], boxValArr[3], boxValArr[6])) winner = "X";
        if(checkAllValSame("X", boxValArr[1], boxValArr[4], boxValArr[7])) winner = "X";
        if(checkAllValSame("X", boxValArr[2], boxValArr[5], boxValArr[8])) winner = "X";

        if(checkAllValSame("X", boxValArr[0], boxValArr[4], boxValArr[8])) winner = "X";
        if(checkAllValSame("X", boxValArr[2], boxValArr[4], boxValArr[6])) winner = "X";
        
        // condition check for O
        if(checkAllValSame("O", boxValArr[0], boxValArr[1], boxValArr[2])) winner = "O";
        if(checkAllValSame("O", boxValArr[3], boxValArr[4], boxValArr[5])) winner = "O";
        if(checkAllValSame("O", boxValArr[6], boxValArr[7], boxValArr[8])) winner = "O";

        if(checkAllValSame("O", boxValArr[0], boxValArr[3], boxValArr[6])) winner = "O";
        if(checkAllValSame("O", boxValArr[1], boxValArr[4], boxValArr[7])) winner = "O";
        if(checkAllValSame("O", boxValArr[2], boxValArr[5], boxValArr[8])) winner = "O";

        if(checkAllValSame("O", boxValArr[0], boxValArr[4], boxValArr[8])) winner = "O";
        if(checkAllValSame("O", boxValArr[2], boxValArr[4], boxValArr[6])) winner = "O";

        return winner;
    }

    const onClickBoxHandler = (index) => {
        let prevGameState = {...gameState};
        prevGameState.boxStates[index] = prevGameState.activeUser;
        prevGameState.activeUser = prevGameState.activeUser === "X" ? "O" : "X";
        prevGameState.winner = checkWinner(prevGameState.boxStates);
        prevGameState.disabled = isGameOver(prevGameState.boxStates) || prevGameState.winner !== "";

        setGameState({
            ...prevGameState
        });
    }

    const enabledOrDisableClass = () => {
        return (gameState.disabled) ? "row mb-1 mt-1 disabled" : "row mb-1 mt-1";
    } 

    return (
        <div classNameName="App">
            <MasterPage>
                    <div className="row">
                        <div className="col-12 col-xl-12 p-2 border-10">
                            <div className="border-bottom">Active Player</div>
                            <div>{gameState.activeUser}</div>
                        </div>
                    </div>

                    <div className={enabledOrDisableClass()}>
                        <Box onClickHandler={(index)=>onClickBoxHandler(index)} boxVal={gameState.boxStates[0]} index="0"/>
                        <Box onClickHandler={(index)=>onClickBoxHandler(index)} boxVal={gameState.boxStates[1]} index="1"/>
                        <Box onClickHandler={(index)=>onClickBoxHandler(index)} boxVal={gameState.boxStates[2]} index="2"/>
                    </div>
                    <div className={enabledOrDisableClass()}>
                        <Box onClickHandler={(index)=>onClickBoxHandler(index)} boxVal={gameState.boxStates[3]} index="3"/>
                        <Box onClickHandler={(index)=>onClickBoxHandler(index)} boxVal={gameState.boxStates[4]} index="4"/>
                        <Box onClickHandler={(index)=>onClickBoxHandler(index)} boxVal={gameState.boxStates[5]} index="5"/>
                    </div>
                    <div className={enabledOrDisableClass()}>
                        <Box onClickHandler={(index)=>onClickBoxHandler(index)} boxVal={gameState.boxStates[6]} index="6"/>
                        <Box onClickHandler={(index)=>onClickBoxHandler(index)} boxVal={gameState.boxStates[7]} index="7"/>
                        <Box onClickHandler={(index)=>onClickBoxHandler(index)} boxVal={gameState.boxStates[8]} index="8"/>
                    </div>
                    
                    <div className="row">
                        <div className="col-12 col-xl-12 p-2 border-10">
                            <div className="border-bottom">Winner</div>
                            <div className="min-height-width title">{gameState.winner}</div>
                        </div>
                    </div>
            </MasterPage>
        </div>
    );
}

export default App;
