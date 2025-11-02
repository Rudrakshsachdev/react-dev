function Random() {
    let number = Math.random() * 100;

    return <h1 style={{ color: "blue", textAlign: "center" }}>Random Number: <span className="round">{Math.round(number)}</span></h1>;
}

export default Random;