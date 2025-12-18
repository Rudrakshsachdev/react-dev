const StyledCard = () => {
    const styles = {
        backgroundColor: 'lightblue',
        padding: '20px',
        borderRadius: '10px',
        color: 'darkblue',
    };

    return (
        <div style={styles}>
            <h2>Styled Card Component</h2>
            <p>This is a card component with inline styling in React.</p>
        </div>
    )
}

export default StyledCard;