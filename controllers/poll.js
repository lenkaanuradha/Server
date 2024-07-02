import Poll from "../models/Poll.js";

export const createpoll = async (req, res) => {
  try {
    console.log("reqbody",req.body)
    const { question, options } = req.body;
    const created_by = req.params.user_id;
    const newpoll = new Poll({ question, options, created_by });

    await newpoll.save();
    res
      .status(200)
      .json({
        success: true,
        message: "Poll created successfully!",
        newpoll: newpoll,
      });
  } catch (error) {
    console.log(error)
    res.json({ success: "false" });
  }
};

export const getpolls= async (req, res) => {
  try {
   const allpolls= await Poll.find({})
    console.log(allpolls)
    res
      .status(200)
      .json({
        success: true,
        message: "All polls are here!",
       allpolls:allpolls
      });
  } catch (error) {
    console.log(error)
    res.json({ success: "false" });
  }
};