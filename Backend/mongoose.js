const mongoose = require("mongoose");

// Connect to the MongoDB database
uri =
  "mongodb+srv://ethayu1:dMyZtC65r7tEA8Ge@cluster0.sb78cwt.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(
  uri,
  {
    dbName: "Database",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => (err ? console.log(err) : console.log("Connected to database"))
);

// Connection events
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Expore the mongoose object
module.exports = mongoose;






// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri = "mongodb+srv://ethayu1:dMyZtC65r7tEA8Ge@cluster0.sb78cwt.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
