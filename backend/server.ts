import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.query(`
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
  );
`).catch(err => console.error('Error creating users table', err));

app.post('/api/auth/register', async (req: any, res: any) => {
    try {
        const { email, password } = req.body;
        console.log('Register request', email);
        const result = await pool.query(
          'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email',
          [email, password]
        );
        res.status(201).json({ user: result.rows[0], token: 'fake-jwt-token' });
    } catch (err: any) {
        if (err.code === '23505') {
            return res.status(409).json({ error: 'User already exists' });
        }
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/auth/login', async (req: any, res: any) => {
    try {
        const { email, password } = req.body;
        const result = await pool.query(
          'SELECT * FROM users WHERE email = $1',
          [email]
        );
        const user = result.rows[0];
        if (user && user.password === password) {
          res.json({ token: 'fake-jwt-token', user: { id: user.id, email: user.email } });
        } else {
          res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/health', (req: any, res: any) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
