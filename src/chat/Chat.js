import ChatHeader from "../chatHeader/ChatHeader";
import Message from "../message/Message";

function Chat({currentUser}) {
    const messsagesData = currentUser && currentUser.currFriend && currentUser.currFriend.messages ? currentUser.currFriend.messages : [];

    if(!currentUser.currFriend || !currentUser || !currentUser.friends || currentUser.friends.length === 0) {
        return <div></div>
    }

    return (
        <>
            <ChatHeader name={currentUser.currFriend.name} img={currentUser.currFriend.image} />
            <main className="messages" >
                <div className="real-messages">
                {messsagesData.length > 0 && messsagesData.map((message, index) => (
                <Message 
                    key={index}
                    text={message.text} 
                    time={message.time} 
                    side={message.sender === currentUser.username ? 'left' : 'right'} 
                />
                ))}
                </div>
            </main>
        </>
    );
}

export default Chat;
