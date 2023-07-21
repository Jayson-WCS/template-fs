import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Reviews() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:3309/contacts');
      setMessages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div data-theme="forest" className="hero min-h-screen bg-base-200">
      <div className="hero-content flex flex-col lg:flex-col">
      <button onClick={fetchMessages} className="btn btn-primary capitalize text-xl px-6">Get Feedbacks</button>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 justify-center">
          {messages.map((message) => (
            <div key={message.id} className="card w-96 bg-white text-primary-content">
              <div className="card-body">
                <h2 className="card-title">{message.username}</h2>
                <p>{message.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
