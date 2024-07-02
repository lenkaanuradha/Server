import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    poll_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Poll',
        required: true
    },
    comment_text: {
        type: String,
        required: true,
       
    },
    commented_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    parent_comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        default: null
    }
}, { timestamps: true });

export default mongoose.model("Comment", commentSchema);
