import mongoose, { Schema } from "mongoose";

const followersSchema = Schema({
    followerId: {type:Schema.Types.ObjectId, ref:"Users"},
    writerId:{type:Schema.Types.ObjectId, ref:"Users"},
},
{
    timestamps:true
});

const Followers = mongoose.model("Follower", followersSchema);

export default Followers;