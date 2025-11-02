function CurrentTime() {
    return (
        <div>
            <h2>Current Time in Bharat</h2>
            <p>{new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
        </div>
    );
}

export default CurrentTime;
