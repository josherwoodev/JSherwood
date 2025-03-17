export default function Table(props) {
    return (<table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Hair Color</th>
            <th>Gender</th>
        </tr>

        </thead>
        <tbody>{props.data.map((row, index) => (<tr key={index}>
                <td>{row.name}</td>
                <td>{row.height}</td>
                <td>{row.hair_color}</td>
                <td>{row.gender}</td>
            </tr>))}</tbody>
    </table>);
}