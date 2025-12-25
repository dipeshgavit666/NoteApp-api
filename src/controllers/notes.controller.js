import Note from "../models/notes.model.js"

// get all notes
const getAllNotes = async(req, res) => {
    try {
        const allnotes = await Note.find({});
        res.status(200).json({
            success: true,
            message: "All Notes",
            data: allnotes
        })
    } catch (error) {
        console.error("error in getting all Notes", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

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
            message: "Note created successfully",
            data: newNote
        })
    } catch (error) {
        console.error("error in creating new Note", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
};

// delete note
const deleteNote = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedNote = await Note.findOneAndDelete(id);
        
        if(!deletedNote){
            return res.status(404).json({
            success: false,
            message: "Note not found"
        });
        }

        res.status(200).json({
            success: true,
            message: "Note deleted successfully",
            data: deletedNote
        });

    } catch (error) {
        console.error("error in deleting Note", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error while deleting note"
        })
    }
}

// update note
const updateNote = async (req, res) => {
  const { id } = req.params;
  const note = req.body;


  try {

    const updatedNote = await Note.findByIdAndUpdate(id, note);

    if (!updatedNote) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Note updated successfully",
      data: updatedNote,
    });
  } catch (error) {
    console.error("Error in updating Note:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


export {
    createNote,
    deleteNote,
    updateNote,
    getAllNotes
}