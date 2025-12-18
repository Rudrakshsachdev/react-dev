const Greeting = ({timeofday}) => {
    // use ternary operator to conditionally render based on timeofday prop
    return (
        <div>
            {timeofday === 'morning' ?
            <h1>Good Morning!</h1> :
            timeofday === 'afternoon' ?
            <h1>Good Afternoon!</h1> :
            <h1>Good Evening!</h1>
            }
        </div>
    )
}

export default Greeting;