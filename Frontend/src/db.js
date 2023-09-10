
import { MongoClient } from "mongodb";

const connectionString =
  "mongodb+srv://ethayu1:dMyZtC65r7tEA8Ge@cluster0.sb78cwt.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}
let db = conn.db("Database");

export default db;