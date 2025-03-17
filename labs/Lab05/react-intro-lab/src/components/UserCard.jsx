const STYLE = {
    border: '3px solid white', padding: '10px', marginBottom: '10px'
}

function UserCard(props) {
    return (<div id={props.id} style={STYLE}><h2>{props.name}</h2><p>{props.age}</p></div>);
}

export default UserCard;