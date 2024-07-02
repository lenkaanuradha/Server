import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    useremail: {
      type: String,
      required: true,
     
    },
    password: {
      type: String,
      required: true,
      
    },
    profile_picture: {
        type: String,
       
       
    },
   
   
   
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
