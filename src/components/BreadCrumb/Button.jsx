const Button = (props) => {
    const { bgColor, text, justify, color } = props;

    return (
        <button className='button' style={{ background: bgColor, textAlign: text, justifyContent: justify }}>
            {props.children}
            <span>
                <i class='fa-solid fa-arrow-right' style={{ color: color }}></i>
            </span>
        </button>
    );
};

export default Button;
