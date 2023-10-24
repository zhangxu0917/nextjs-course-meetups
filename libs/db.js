import { MongoClient } from "mongodb";

export const getMongodbClient = async () => {
  const mongodb_service_url = `mongodb://${process.env.mongodb_host}:${process.env.mongodb_port}/${process.env.mongodb_db_name}`;

  const client = await MongoClient.connect(mongodb_service_url);

  return client;
};
