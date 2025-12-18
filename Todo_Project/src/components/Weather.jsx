const Weather = (props) => {
    let temp = props.temperature;

    if (temp <= 15) {
        return <h2>It's Cold Outside!</h2>
    } else if (temp > 15 && temp <= 25) {
        return <h2>The Weather is Pleasant.</h2>
    } else if (temp > 25) {
        return <h2>It's Hot Outside!</h2>
    }
}

export default Weather;