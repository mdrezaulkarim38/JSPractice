function CurrentTime() {
    let time = new Date();
    return (
        <p>This is the current Date: {time.toLocaleDateString()} time: {time.toLocaleTimeString()}</p>
    );
}

export default CurrentTime;
