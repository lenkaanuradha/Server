import mongoose from "mongoose";

const voteSchema = new mongoose.Schema({
    poll_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Poll',
        required: true,
        
    },
    option: {
        type: String,
        required: true,
       
    },
    voted_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

export default mongoose.model("Vote", voteSchema);
