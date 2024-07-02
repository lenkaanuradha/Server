import Poll from "../models/Poll.js";
import Users from "../models/User.js";


export const getUser = async (req, res) => {

  try {
    const user = await Users.findById(req.params.user_id);
    const polls = await Poll.findById({created_by:req.params.user_id})
    res.status(200).json({success:"true",user:user,polls:polls});;
  } catch (error) {
   
    res.json({success:"false",error:error});
  }
};
export const getallUsers = async (req, res) => {
 
  try {
   
  const allUsers = await Users.find({})
  
 res.status(200).json({success:"true", allUsers:allUsers});;
  } catch (error) {
   
    
    res.status(500).json({success:"false", error:error});
  }
};


