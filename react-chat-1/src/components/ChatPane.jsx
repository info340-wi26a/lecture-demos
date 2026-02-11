import INITIAL_CHAT_LOG from '../data/chat_log.json'

export function ChatPane(props) {

  //what I have: [{},{},{}]
  console.log(INITIAL_CHAT_LOG);

  // const newArray = oldArray.map((item) => {
  //   const transformed = ...
  //   return transformed;
  // })
  const messageElemArray = INITIAL_CHAT_LOG.map((msgObj) => {
    const transformed = <MessageItem key={msgObj.timestamp} messageObj={ msgObj } />

    return transformed;
  })


  //what I want: [<>, <>, <>]
  // const messageElemArray = [
  //     <MessageItem key={"a"} messageObj={ INITIAL_CHAT_LOG[0] } />,
  //     <MessageItem key={"b"} messageObj={ INITIAL_CHAT_LOG[1] } />,
  //     <MessageItem key={"c"} messageObj={ INITIAL_CHAT_LOG[2] } />,
  // ]  

  return (
    <section>
      {messageElemArray}
    </section>
  )
}

function MessageItem(props) {
  console.log(props);
  const userName = props.messageObj.userName;
  const text = props.messageObj.text;
  const userImg = props.messageObj.userImg;

  return (
    <div className="message d-flex mb-3">
      <div>
        <img src={userImg} />
      </div>
      <div className="ms-2">
        <p className="user-name">{userName}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}