# SSI Tech Solution

This is the official website for SSI Tech Solution, a technology consulting firm.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sarifulislam/web.git
   cd web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Required packages:
   - express: Web framework for Node.js
   - xlsx: Library to read and write Excel files
   - @google-cloud/storage: Client library for Google Cloud Storage
   - multer: Middleware for handling multipart/form-data
     ```
     npm install express xlsx cors @google-cloud/storage multer
     ```

4. Start the development server:
   ```bash
   npm start
   ```

5. For production build:
   ```bash
   npm run build
   ```

6. Deploy to Google Cloud App Engine:
   ```bash
   gcloud app deploy
   ```

## Configuration

- Set up Google Cloud Storage credentials in your environment variables.
- Configure the bucket name in `server.js` if needed.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
