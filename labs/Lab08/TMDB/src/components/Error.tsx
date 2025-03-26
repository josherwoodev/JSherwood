import ContentBox from "./ContentBox.tsx";

export default function Error(props: any) {

    return (<ContentBox>
        {props.children
            ? props.children
            : <>
                <h2>404'd!!</h2>
                <p>The page you're looking for doesn't seem to exist or is otherwise unreachable.</p>
            </>}
        </ContentBox>);
}