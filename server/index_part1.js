const express = require('express');
const cors = require('cors');
const https = require('https');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const TELEGRAM_BOT_TOKEN = '7539353248:AAEFzIwK7z5L2g0iBl_fGfr1SbUKg8t4ANI';
const TELEGRAM_CHAT_ID = '866844840';

function sendTelegramMessage(message) {
  const data = JSON.stringify({
    chat_id: TELEGRAM_CHAT_ID,
    text: message,
    parse_mode: 'Markdown',
  });

  const options = {
    hostname: 'api.telegram.org',
    port: 443,
    path: `/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          if (parsed.ok) {
            resolve(parsed);
          } else {
            reject(new Error('Telegram API error: ' + body));
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    req.write(data);
    req.end();
  });
}
