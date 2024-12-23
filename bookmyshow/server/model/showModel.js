const mongoose = require("mongoose");

const showSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        movie: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "movies",
            required: true,
        },
        ticketPrice: {
            type: Number,
            required: true,
        },
        totalSeats: {
            type: Number,
            required: true,
        },
        bookedSeats: {
            type: Array,
            default: [],
        },
        theatre: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "theatre",
            required: true,//2 theater cant refer same show,every thetre must have unique sho  id
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("shows", showSchema);