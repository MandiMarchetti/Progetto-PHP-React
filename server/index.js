// import axios from "axios";

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const data = await axios.post("http://localhost/api");
// };

/////////////////////////

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "brain_pons_db",
});

app.post("/register", (req, res) => {
  const full_name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO user_register (full_name, phone, email, password) VALUES (?,?,?,?)",
    [full_name, phone, email, password],
    (err, result) => {
      console.log(err);
    }
  );
});

app.listen(3001, () => {
  console.log("running server");
});
