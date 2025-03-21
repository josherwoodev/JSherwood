export default function Card(props:any) {
    return (<p>{props.data.title}  {props.data.poster_path}  {props.data.overview}</p>);
}