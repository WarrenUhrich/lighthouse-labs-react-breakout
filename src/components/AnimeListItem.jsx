import useAxios from "../hooks/useAxios";

export default function AnimeListItem (props) {
    const [people] = useAxios(props.people);

    return (
        <li>
            <h2>{props.title} ({props.original_title})</h2>
            <button></button>
            <ul>
                {people && people.map(person => <li key={person.id}>
                    <h3>{person.name}</h3>
                </li>)}
            </ul>
        </li>
    );
}
