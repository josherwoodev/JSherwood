import Dice from "./components/Dice.jsx";
import {getRandomDieFace} from "./helper.js";
import {useEffect, useState} from "react";

function App() {
    const [die1, setDie1] = useState(getRandomDieFace());
    const [die2, setDie2] = useState(getRandomDieFace());
    const [total, setTotal] = useState(0);
    const STYLE = {
        color: 'black', backgroundColor: 'white', padding: '10px'
    };

    useEffect(() => {
        setTotal(() => die1 + die2 + 2);
    }, [die1, die2]);

    return (<div className="card">
        <div><h1>Roll the Dice</h1></div>
        <Dice first={die1} second={die2}/>
        <div>
            <div style={{'justifyContent': 'center', 'justifySelf': 'center'}}><h2>Roll equals {total}</h2></div>
            <div style={{'justifyContent': 'center', 'justifySelf': 'center'}}>
                <button onClick={() => {
                    setDie1(getRandomDieFace());
                    setDie2(getRandomDieFace())
                }} style={STYLE}>Click to Roll
                </button>
            </div>
        </div>

    </div>);
}

export default App;