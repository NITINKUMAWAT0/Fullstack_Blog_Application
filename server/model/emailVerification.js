import mongoose, { Schema } from "mongoose";

const emailVerificationSchema = Schema({
    userId:String,
    token:String,
    createdAt:Date,
    expiresAt:Date,
});

const emailVerification = mongoose.model("emailVerification", emailVerificationSchema);

export default emailVerification;