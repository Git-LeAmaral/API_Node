import mongoose, {mongo} from "mongoose"

async function conectaNoDatabase() {
  mongoose.connect(process.env.DB_CONEXCTION_STRING);
  return mongoose.connection;
};

export default conectaNoDatabase;

