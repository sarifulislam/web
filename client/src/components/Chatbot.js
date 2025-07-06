
import React, { useState } from 'react';
import { db } from '../firebaseConfig'; // Import Firestore instance
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const supportContact = {
  phone: '+91 98004 35692',
  email: 'appchatwhole@gmail.com',
};

const questions = [
  { id: 'welcome', question: 'Hello and welcome to Chatwhole — your partner in intelligent AI and agent services.\nI\'m here to help you with any queries. Let\'s get started!' },
  { id: 'phone', question: 'May I have your phone number so our support team can reach out if needed?' },
  { id: 'email', question: 'Could you please share your email address so we can send you more details or updates?' },
  { id: 'service', question: 'Which of our services are you interested in?\n\n🤖 AI Solutions\n🧑‍💼 Virtual Agent Services\n🧠 Custom AI Development\n📊 Data & Analytics\n🛠️ Something Else' },
];

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([
    { from: 'bot', text: 'Hello! Welcome to our website. I am here to assist you.' },
    { from: 'bot', text: `You can contact our support at Phone: ${supportContact.phone} or Email: ${supportContact.email}` },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [chatCompleted, setChatCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUserInput = async () => {
    if (!inputValue.trim()) return;

    const currentQuestion = questions[currentQuestionIndex];

    // Add user message to chat history
    setChatHistory((prev) => [...prev, { from: 'user', text: inputValue }]);

    // Save answer
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: inputValue }));

    setInputValue('');

    if (currentQuestionIndex + 1 < questions.length) {
      // Ask next question
      setTimeout(() => {
        setChatHistory((prev) => [...prev, { from: 'bot', text: questions[currentQuestionIndex + 1].question }]);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 500);
    } else {
      // Chat completed
      setChatCompleted(true);
      setLoading(true);
      setTimeout(async () => {
        try {
          // Save chat answers to Firestore in 'contacts' collection as per Firestore rules
          await addDoc(collection(db, 'contacts'), {
            ...answers,
            timestamp: serverTimestamp(),
          });

          setChatHistory((prev) => [...prev, { from: 'bot', text: 'Thank you for sharing your details!\nOur expert team will contact you shortly.\nAt Chatwhole, we’re committed to providing cutting-edge AI solutions and intelligent agent services tailored to your needs.\n\n📞 Contact Info Reminder (Optional Fallback)\n\nNeed immediate support?\n📞 Phone: +91 98004 35692\n📧 Email: appchatwhole@gmail.com' }]);
          setLoading(false);
        } catch (err) {
          setError('Failed to save your message. Please try again later.');
          setLoading(false);
        }
      }, 1000);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleUserInput();
    }
  };

  return (
    <div style={styles.chatbotContainer}>
      <div style={styles.chatHeader}>Chat with us</div>
      <div style={styles.chatBody}>
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.chatMessage,
              alignSelf: msg.from === 'bot' ? 'flex-start' : 'flex-end',
              backgroundColor: msg.from === 'bot' ? '#e1e1e1' : '#007bff',
              color: msg.from === 'bot' ? '#000' : '#fff',
            }}
          >
            {msg.text}
          </div>
        ))}
        {loading && <div style={{ ...styles.chatMessage, alignSelf: 'flex-start' }}>Sending...</div>}
        {error && <div style={{ ...styles.chatMessage, alignSelf: 'flex-start', color: 'red' }}>{error}</div>}
      </div>
      {!chatCompleted && (
        <div style={styles.chatInputContainer}>
          <input
            type="text"
            placeholder="Type your answer..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            style={styles.chatInput}
            disabled={loading}
          />
          <button onClick={handleUserInput} style={styles.sendButton} disabled={loading}>
            Send
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  chatbotContainer: {
    position: 'fixed',
    bottom: 20,
    right: 20,
    width: 320,
    maxHeight: 480,
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Arial, sans-serif',
    zIndex: 1000,
  },
  chatHeader: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 15px',
    fontWeight: 'bold',
    fontSize: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  chatBody: {
    flex: 1,
    padding: 10,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  chatMessage: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 12,
    fontSize: 14,
    wordWrap: 'break-word',
  },
  chatInputContainer: {
    display: 'flex',
    borderTop: '1px solid #ddd',
  },
  chatInput: {
    flex: 1,
    border: 'none',
    padding: 10,
    fontSize: 14,
    borderRadius: '0 0 0 8px',
    outline: 'none',
  },
  sendButton: {
    backgroundColor: '#007bff',
    border: 'none',
    color: '#fff',
    padding: '0 15px',
    cursor: 'pointer',
    borderRadius: '0 0 8px 0',
  },
};

export default Chatbot;
