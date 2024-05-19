import mongoose from 'mongoose';





const mongoDB = async () => {
  mongoose.connect("mongodb+srv://gcyogesh962:examgad1@cluster0.q5u54kt.mongodb.net/RajuSir?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Mangodb connected sucessfully")

  }).catch((err)=>{
    console.log(err, "Error connecting db")
  })
   

}
export default mongoDB;