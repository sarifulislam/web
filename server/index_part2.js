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

  const message = messageLines.join('\\n');

  try {
    await sendTelegramMessage(message);
    console.log('Message sent to Telegram successfully');
    res.status(200).json({ message: 'Message sent to Telegram' });
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    res.status(500).json({ error: 'Error sending message to Telegram' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
