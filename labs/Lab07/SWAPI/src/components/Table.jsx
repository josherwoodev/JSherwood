export default function Table(props) {
    return (<table style={{backgroundColor:'#222f'}}>
        <thead style={{backgroundColor:'#444f'}}>
        <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Hair Color</th>
            <th>Gender</th>
        </tr>
        </thead>
        <tbody>{props && props.data ? props.data.map((row, index) => (<tr key={index}>
            <td>{row.name}</td>
            <td>{row.height}</td>
            <td>{row.hair_color}</td>
            <td>{row.gender}</td>
        </tr>)) : (<tr>
            <td colSpan={4}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}><h3>Could not populate data from SWAPI.</h3></div>
            </td>
        </tr>)}</tbody>
    </table>);
}