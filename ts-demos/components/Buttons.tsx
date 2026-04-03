const Buttons = ({ label, onClick, isDisabled }: { label: string; onClick: () => void; isDisabled?: boolean }) => {
    return <button onClick={onClick} disabled={isDisabled}>
        {label}
    </button>;
}

export default Buttons;