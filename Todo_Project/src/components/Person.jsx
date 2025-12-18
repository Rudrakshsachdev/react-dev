const Person = (props) => {
    return (
        <div>
            <h2>Person Details:</h2>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Occupation: {props.occupation}</p>
        </div>
    )
}

export default Person;