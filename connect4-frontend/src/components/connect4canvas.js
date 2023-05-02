//logic for connect four game
import {useState} from 'react';
// import { useChatContext, useChannelStateContext } from "stream-chat-react";


const ColumnMatrix = ({col, onClick, randomKey}) => {
    return(
        <div className="colmn" key = {`col-${randomKey}`} onClick={onClick}>
            {col.map((cell,index)=>{
                return <span className="cell" key={`cell-${randomKey}-${index}`}>{cell}</span>
            })}

<style jsx>{`
.colmn {
    display: flex;
    flex-direction: column-reverse;
    flex-grow: 1;
    border: 1px solid #7289DA;
    width: max-content;
    background-color: #7289DA;
    width: 15vh;
    
    padding: 5px;
  }
  
  .cell {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    margin: 5px;
    background-color: white;
  }
  
  .cell:hover {
    background-color: lightblue;
  }
  
  .cell.red {
    background-color: red;
  }
  
  .cell.yellow {
    background-color: yellow;
  }
  
`}</style>
</div>
    )
        }




const Connect4 = () => {
    let initial = {};
    for (let i = 0; i < 7; i++) {

        initial[i] = [null,null,null,null,null,null];   
    } 
        const [gameState, setGameState] = useState(initial);
        const [player, setPlayer] = useState("🔴");

        const [turn, setTurn] = useState("🔴");

        const [winner,setWinner] = useState(null);
        const endGame = ()=> {
            let col;
            // Check if there are any four in a row in a column
            for(var i = 0; i < 7; i++) {
            for(var k= 0; k< 6; k++) {
            if(gameState[i][k] != null &&
            gameState[i][k] == gameState[i][k+1] &&
            gameState[i][k+1] == gameState[i][k+2] &&
            gameState[i][k+2] == gameState[i][k+3]) {
            return true;
    }
    }
    }

    for(var i = 0; i < 4; i++) {
        for(var k= 0; k< 6; k++) {
        if(gameState[i][k] != null &&
        gameState[i][k] == gameState[i+1][k] &&
        gameState[i+1][k] == gameState[i+2][k] &&
        gameState[i+2][k] == gameState[i+3][k]) {
        return true;
}
}
}

    // Check if there are any four diagonal up to the right
for(var i = 0; i < 7; i++) {
    for(var k = 0; k < 6; k++) {
    if(gameState[i][k] !== null &&
        gameState[i + 1] !== undefined &&
        gameState[i + 1][k + 1] !== undefined &&
        gameState[i + 2] !== undefined &&
        gameState[i + 2][k + 2] !== undefined &&
        gameState[i][k] == gameState[i + 1][k + 1] &&
        gameState[i + 1][k + 1] == gameState[i + 2][k + 2] &&
        gameState[i + 2][k + 2] == gameState[i + 3][k + 3]
      ){
    return true;
    }
    }
}

for(var i = 0; i < 7; i++) {
    for(var k = 5; k >= 3; k--) {
    if(    gameState[i][k] !== null &&
    gameState[i + 1] !== undefined &&
    gameState[i][k] == gameState[i + 1][k + 1] &&
    gameState[i + 1][k + 1] == gameState[i + 2][k + 2] &&
    gameState[i + 2][k + 2] == gameState[i + 3][k + 3]) {
    return true;
    }
    }
}
 return false;
};


const dropCoin = (colIndex) => {
    const column = gameState[colIndex];
    const pos = column.indexOf(null);
    if (pos >= 0) {
      column[pos] = player;
      setGameState({...gameState, [colIndex]: column});

      if(endGame(player)) {
        setWinner(player)
      }
      setPlayer(player === "🔴" ? "🟡" : "🔴");
    }
  };

  if(winner){
    return <div>Winner is {winner}</div>
  }
  else{
        return(
            <>
            <div className="player">
            {Object.entries(gameState).map(([k,col],x)=>{
                return <ColumnMatrix index={x} col={col} onClick={()=> dropCoin(k)}
                    />;})}
            <style jsx>{`
            .player{
                display:flex;
                flex:1;
            }
            `}</style>
                    </div>
                </>

        );
    }
}

export default Connect4;