// api router code will never explore to the client side.

import { getMongodbClient } from "@/libs/db";
import { MongoClient } from "mongodb";

// POST /api/new-meetup
const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await getMongodbClient();

    const db = client.db();

    const meetupsCollection = await db.collection("meetups");
    const result = await meetupsCollection.insertOne({
      title,
      image,
      address,
      description,
    });

    client.close();
    res.status(201).json({
      message: "Inserted  Meetup Successfully!",
    });
  }
};

export default handler;
