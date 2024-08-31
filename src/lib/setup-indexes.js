import clientPromise from './mongodb';

async function setupIndexes() {
  try {
    const client = await clientPromise;
    const db = client.db('nextPixelDB');
    const usersCollection = db.collection('users');

    await usersCollection.createIndex({ email: 1 }, { unique: true });
    console.log('Unique index created on email field.');
  } catch (error) {
    console.error('Error creating unique index:', error);
  }
}

setupIndexes().catch(console.error);

