import Vote from "../models/Vote.js";
import Poll from "../models/Poll.js";
export const castvote = async (req, res) => {
  try {
   console.log(req.body)
    const poll_id = req.params.pollid;
    const option = req.body.option;
    const voted_by = req.params.votedby;
   
    const newvote = new Vote({ poll_id, option, voted_by });

    await newvote.save();
    res.status(200).json({
      success: true,
      message: "Vote casted successfully!",
      newvote: newvote,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: "false" });
  }
};
export const getallvotes = async (req, res) => {
  try {
  
   
    const allvotes = await Vote.find({})
    .populate('poll_id').populate('voted_by');
 console.log("all votes",allvotes)
  
  
    res.status(200).json({
      success: true,
      message: "All votes retrived successfully!",
      allvotes: allvotes,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: "false",error:error });
  }
};
