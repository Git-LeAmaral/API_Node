import mongoose, {mongo} from "mongoose"

async function conectaNoDatabase() {
  mongoose.connect("mongodb+srv://admin:admin123@cluster0.l90uq.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");

  return mongoose.connection;
};

export default conectaNoDatabase;

