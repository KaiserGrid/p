const express = require('express');
const bodyParser = require('body-parser');
const { OAuth2Client } = require('google-auth-library');

const app = express();
const port = 8000;
const CLIENT_ID = '282800103988-rhdmjdl5jks67sp6f4c4l5g4h5kgg8iq.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

// Serve static files from the 'public' directory
app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/token', async (req, res) => {
    const token = req.body.id_token;
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        res.json({ success: true, user: payload });
    } catch (error) {
        res.status(401).json({ success: false, message: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
