import Poll from "../models/Poll.js";
import Users from "../models/User.js";
import Vote from "../models/Vote.js"
export const getUser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.user_id);
    if (!user) {
      return res.status(404).json({ success: "false", error: "User not found" });
    }
    
    const polls = await Poll.find({ created_by: req.params.user_id });
    const voted =await Vote.find({voted_by: req.params.user_id});
   
    const voteCount = voted.length; 
    res.status(200).json({ success: "true", user: user, polls: polls ,voteCount:voteCount});
  } catch (error) {
    res.status(500).json({ success: "false", error: error.message });
  }
};

export const getallUsers = async (req, res) => {
  try {
    const allUsers = await Users.find({});
    res.status(200).json({ success: "true", allUsers: allUsers });
  } catch (error) {
    res.status(500).json({ success: "false", error: error.message });
  }
};
