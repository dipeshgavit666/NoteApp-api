import Note from "../models/notes.model.js"


//  create Note
const createNote = async(req, res) => {
    const {title, description} = req.body;


    if(!title && !description){
        return res.status(400).json({
            success: false,
            message: "please provide all fileds"
        })
    }

    try {
        const newNote = await Note.create({
            title,
            description
        });
        res.status(200).json({
            success: true,
            data: newNote
        })
    } catch (error) {
        console.error("error in creating new Note", message.error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
};

// delete note
const deleteNote = async(req, res) => {

}

// update note


export {
    createNote
}