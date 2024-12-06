//4. Asynchronous Database Operations (example with MongoDB):

import { MongoClient } from 'mongodb';

async function connectToMongo() {
  const client = new MongoClient('mongodb://localhost:27017/');

  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db('mydb');
    const collection = db.collection('mycollection');
    const results = await collection.find({}).toArray(); // Asynchronous database operations.
    console.log(results);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

connectToMongo();
