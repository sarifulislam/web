import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const TELEGRAM_BOT_TOKEN = '7539353248:AAEFzIwK7z5L2g0iBl_fGfr1SbUKg8t4ANI';
const TELEGRAM_CHAT_ID = '866844840';

app.post('/sendChatToTelegram', async (req, res) => {
  const answers = req.body.answers || {};
  const messageLines = [
    '*New Chatbot Message Received*',
    `*Name:* ${answers.name || 'N/A'}`,
    `*Phone:* ${answers.phone || 'N/A'}`,
    `*Email:* ${answers.email || 'N/A'}`,
    `*Service Interested:* ${answers.service || 'N/A'}`,
    `*Timestamp:* ${new Date().toLocaleString()}`,
  ];

  const message = messageLines.join('\n');

  const url = \`https://api.telegram.org/bot\${TELEGRAM_BOT_TOKEN}/sendMessage\`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    const result = await response.json();
    if (!result.ok) {
      console.error('Telegram API error:', result);
      return res.status(500).json({ error: 'Failed to send message to Telegram' });
    } else {
      console.log('Message sent to Telegram successfully');
      return res.status(200).json({ message: 'Message sent to Telegram' });
    }
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    return res.status(500).json({ error: 'Error sending message to Telegram' });
  }
});

app.listen(port, () => {
  console.log(\`Server is running on port \${port}\`);
});
