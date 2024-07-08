import mongoose from "mongoose"




const connection = {};

export const connectToDb = async () => {
  try {
    if(connection.isConnected) {            //pregunto si hay una conexion establecida. Como ya se establecio en la linea 11 y 12 no volvera a crear una nueva conexion y usara la existing connection
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);  //creo una nueva coexion
    connection.isConnected = db.connections[0].readyState; // update connection taking the first connection [0]
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
