const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5500;

// SQLiteデータベースの作成
const db = new sqlite3.Database('budgetapp.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database');
    // テーブルが存在しない場合、テーブルを作成
    db.run(`CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      description TEXT,
      amount REAL
    )`);
  }
});

// ミドルウェアの設定
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 静的ファイルの提供
app.use(express.static('public'));

// 支出一覧取得
app.get('/expenses', (req, res) => {
  const query = 'SELECT * FROM expenses';
  db.all(query, (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      res.json(rows);
    }
  });
});

// 支出追加
app.post('/expenses', (req, res) => {
  const { description, amount } = req.body;
  const query = 'INSERT INTO expenses (description, amount) VALUES (?, ?)';
  db.run(query, [description, amount], function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      res.json({ id: this.lastID, description, amount });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
