import { useState } from 'react'
import './ChatBot.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "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";

const systemMessage = {
  "role": "system",
  "content": "Explain things like you're interacting with a Common Man."
}

function ChatBot() {
  const [messages, setMessages] = useState([
    {
      message: "Namaste, I'm your sahayaak! Ask me anything!",
      sentTime: "just now",
      sender: "ChatBOT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (userMessage) => {
    // Append "india" to the user's message but keep it invisible
    const messageWithIndia = `${userMessage}<span style="display:none"> india</span>`;

    const newMessage = {
      message: messageWithIndia,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatBOT(newMessages);
  };

  async function processMessageToChatBOT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatBOT") {
        role = "assistant"
      } else {
        role = "user"
      }
      return { role: role, content: messageObject.message }
    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => data.json())
      .then((data) => {
        console.log(data);
        //console.log(data.choices[0].message.content);

        // Only update the content property of the last user message
        const updatedMessages = [...chatMessages];
        updatedMessages[updatedMessages.length - 1].content = data.choices[0].message.content;

        setMessages([...updatedMessages, {
          message: data.choices[0].message.content,
          sender: "ChatBOT"
        }]);
        setIsTyping(false);
      });
  }

  return (
    <div>
      <div className='congtainer-fluid'>

        <div className='row'>
          <div className='col-sm-6'>
            <div className="video-background">
              <video autoPlay muted loop id="video-bg">
                <source src="Video/lawbot.mp4" type="video/mp4" />

              </video>
            </div>
          </div>

          <div className='col-sm-6'>
            <div className="chatbot-container ">
              {/* Video background */}

              <div className="chatbox">
                <div className="App">
                  <div className="mainbox">
                    <MainContainer>
                      <ChatContainer>
                        <MessageList
                          scrollBehavior="smooth"
                          typingIndicator={isTyping ? <TypingIndicator content="ChatBot is typing" /> : null}
                        >
                          {messages.map((message, i) => {
                            console.log(message)
                            return <Message key={i} model={message} />
                          })}
                        </MessageList>
                        <MessageInput placeholder="Type message here" onSend={handleSend} />
                      </ChatContainer>
                    </MainContainer>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default ChatBot;