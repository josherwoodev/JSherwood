import UserCard from "./UserCard.jsx";

const STYLE = {
    border: '2px solid white', padding: '20px'
}

function CardContainer(props) {
    return (<div style={STYLE}>{props.items.sort((a, b) => b.age - a.age).map((item, index) => (<UserCard key={index} id={'user-card-' + index} name={item.name} age={item.age}/>))}</div>);
}

export default CardContainer;