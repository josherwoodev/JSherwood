import Greeting from "./components/Greeting.jsx";
import CardContainer from "./components/CardContainer.jsx";

function App() {
    const USERS = [{name: 'Bob', age: 25}, {name: 'Charlie', age: 35}, {name: 'Alice', age: 30}];

    return (<>
        <div className="card">
            <Greeting name="Josh"/>
        </div>
        <div>
            <CardContainer items={USERS}/>
        </div>
    </>);
}

export default App;