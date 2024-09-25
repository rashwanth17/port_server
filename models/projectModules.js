const mongoose=require('mongoose')

const projectSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    desc:{
        type:String,
        require:true,
    }
})

const Projects = mongoose.model("Projects",projectSchema)
module.exports = Projects