

const Message = (props) => {

    console.log(props)
    return (
        <div>
            <h4 style={{ color: "red" }}>Merhaba ben {props.isim} ve benim telefon numaram {props.telefon}</h4>
        </div>
    );
}

export default Message;
