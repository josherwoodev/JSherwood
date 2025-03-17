import {FACES} from "../helper.js";

function Dice(props) {
    const STYLE = {
        fontSize: '100px'
    };
    return (<div style={{'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-around'}}>
            <i style={STYLE} className={`fas fa-dice-${FACES[props.first]}`}/>
            <i style={STYLE} className={`fas fa-dice-${FACES[props.second]}`}/>
        </div>);
}

export default Dice;