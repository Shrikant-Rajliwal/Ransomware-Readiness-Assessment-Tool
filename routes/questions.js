var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
const Schema = mongoose.Schema;


mongoose.connect('mongodb://127.0.0.1:27017/RRA-demo');


const questionare = new Schema({
        section:{
                type:String
        },
    question:{
        type: String,
    },
    options: [
        {
                text:{type:String},
                weightage :{type:Number},
                optNum:{type:String}
        },
        {
                text:{type:String},
                weightage :{type:Number},
                optNum:{type:String}
        },
        {
                text:{type:String},
                weightage :{type:Number},
                optNum:{type:String}
        },
        {
                text:{type:String},
                weightage :{type:Number},
                optNum:{type:String}
        }
    ], 
})

var list  = mongoose.model("list",questionare);

module.exports = list;

