const { MongoClient } = require("mongodb");

const url = "YOUR_MONGODB_CONNECTION_STRING";

const client = new MongoClient(url);

const dbName = "Hello";

async function main() {
    await client.connect();

    console.log("Connected successfully");

    const db = client.db(dbName);
    const collection = db.collection("user");

    return "done";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());