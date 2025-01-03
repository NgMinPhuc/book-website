import React, { useState, useEffect, useRef } from "react";
import "./PageDetail.css";
import bookImage from "../../../../public/images/exchangeBook/ConMeoDayHaiAuBay.jpg";
import userlogo from "../../../../public/images/R.png"; // Hình ảnh người dùng
import Response from "./Response"; // Import câu trả lời chatbot

const PageDetail = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isMaximized, setIsMaximized] = useState(true); // trạng thái phóng to/thu nhỏ
  const [responseIndex, setResponseIndex] = useState(0); // Index to track the current response

  const messagesEndRef = useRef(null); // Reference to the end of the messages container

  // Automatically add the first message from the bot when the page loads
  useEffect(() => {
    setMessages([{ text: Response[0], fromUser: false }]);
  }, []);

  // Automatically scroll to the bottom when there is a new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]); // This will trigger every time the messages change

  // Function to handle the user's input and trigger the chatbot's response
  const handleSendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, fromUser: true }]);
    setInput("");
    // Delay the bot's response based on the current index
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: Response[responseIndex], fromUser: false },
      ]);
      setResponseIndex(responseIndex + 1); // Move to the next response after each message
    }, 1000);
  };

  // Toggle the state of chatbox (minimized/maximized)
  const toggleChatBoxSize = () => {
    setIsMaximized(!isMaximized);
  };

  const book = {
    id: "1",
    name: "Con Meo Day Hai Au Bay",
    author: "Luis Sepúlveda",
    coverType: "Paperback",
    publisher: "Youth Publishing House",
    details: {
      publicationYear: "2021",
      language: "Vietnamese",
      condition: "Book condition: 90% new",
      weight: "250 g",
      dimensions: "20 x 13 x 1.5 cm",
      pages: 150,
      notes: "The cover is slightly worn due to usage.",
    },
  };

  return (
    <div className="product-detail-page">
      <div className="product-image-container">
        <img src={bookImage} alt={book.name} className="main-product-image" />
        <div className="product-buttons">
          <button className="accept-button">Accept</button>
          <button className="dismiss-button">Dismiss</button>
        </div>
      </div>

      <div className="right-container">
        <div className="product-info-container">
          <h2 className="product-name">{book.name}</h2>
          <p className="product-author">Author: {book.author}</p>
          <p className="product-cover">Cover Type: {book.coverType}</p>
          <p className="product-publisher">Publisher: {book.publisher}</p>
        </div>

        <div className="product-detail-container">
          <h3>Book Details</h3>
          <ul>
            <li>Publication Year: {book.details.publicationYear}</li>
            <li>Language: {book.details.language}</li>
            <li>Weight: {book.details.weight}</li>
            <li>Dimensions: {book.details.dimensions}</li>
            <li>Pages: {book.details.pages}</li>
            <li>{book.details.condition}</li>
            <li>Notes: {book.details.notes}</li>
          </ul>
        </div>
      </div>

      {/* Chat Box */}
      <div className={`chat-box ${!isMaximized ? "minimized" : ""}`}>
        <div className="chat-header">
          <button className="chat-minimize-button" onClick={toggleChatBoxSize}>
            {isMaximized ? "-" : "+"}
          </button>
        </div>
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={message.fromUser ? "message user" : "message bot"}>
              {/* If it's the bot's message, show the bot's avatar */}
              {!message.fromUser && (
                <img src={userlogo} alt="Bot" className="message-image" />
              )}
              {message.text}
            </div>
          ))}
          {/* This div will serve as the scroll target */}
          <div ref={messagesEndRef} />
        </div>
        {isMaximized && (
          <div className="chat-input-container">
            <input
              type="text"
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button className="chat-send-button" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageDetail;
