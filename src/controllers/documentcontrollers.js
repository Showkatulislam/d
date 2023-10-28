const document = require('../model/document');
exports.getDoc = async (req, res) => {
  try {
    const id = req.query.id;

    const docs = await document.find({ parentId: id });
    return res.status(200).json({ message: "get doc success", docs });
  } catch (error) {
    res.status(500).json({ message: "fail" });
  }
};



exports.getDocbyId = async (req, res) => {
  try {
    const id = req.params.id;

    const docs = await document.findById;
    return res.status(200).json({ message: "get doc success", docs });
  } catch (error) {
    res.status(500).json({ message: "fail" });
  }
};


exports.addDoc = async (req, res) => {
  try {
    const { id, title } = req.body;

    const doc = {
      parentId: id,
      title,
    };

    const docI = await document.create(doc);
    return res.status(200).json({ message: "sucess", data: docI });
  } catch (error) {
    res.status(500).json({ message: "fail" });
  }
};

exports.deleteDoc = async (
  req,
  res
) => {
  try {
    const { id } = req.query;

    const recursiveDelete = async (documentId)=>{
      const  children=await document.find({parentId:documentId})
      for (const child of children) {
        await document.findByIdAndDelete(child._id);
        recursiveDelete(child._id)
      }
    }
    
    await recursiveDelete(id);

    const docI = await document.findByIdAndDelete(id);

    
    return res.status(200).json({ message: "sucess" } );
  } catch (error) {
    res.status(500).json({ message: "fail" });
  }
};

exports.updateDoc = (
  req,
  res
) => {
  return res.send("I am from doc update");
};

exports.deleteAllDoc = async (
  req,
  res
) => {
  try {
    const akc = await document.deleteMany();
    return res.status(200).json({ message: "delete successfully", akc });
  } catch (error) {
    res.status(501).json({ message: "all document delete fail" });
  }
};

exports.getAllDoc = async (
  req,
  res
) => {
  try {
    const docs = await document.find({});
    return res.status(200).json({ message: "get doc success", docs });
  } catch (error) {
    res.status(500).json({ message: "fail" });
  }
};
