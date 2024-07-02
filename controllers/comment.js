import Comment from "../models/Comment.js";

export const createcomment = async (req, res) => {
  try {
    console.log(req.body);
    const newComment = new Comment({
        commented_by: req.params.user_id,
        comment_text: req.body.comment_text,
        poll_id: req.params.poll_id,
    });
    await newComment.save();

    res.status(200).json({ success: "true" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: "false" });
  }
};
export const getallcomments = async (req, res) => {
    try {
      const allcomments = await Comment.find({})
    console.log(allcomments)
      res.status(200).json({ success: "true" ,allcomments:allcomments});
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: "false" ,error:error});
    }
  };


