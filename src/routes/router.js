const {
    getDoc,
    getDocbyId,
    addDoc,
    deleteDoc,
    updateDoc,
    deleteAllDoc,
    getAllDoc,
  } =require('../controllers/documentcontrollers')
 const express = require('express');
  
const router = express.Router();
  
  router.route("/")
  .get(getDoc)
  .post(addDoc)
  .delete(deleteDoc)
  .patch(updateDoc);
  
  router.route("/all")
  .get(getAllDoc)
  .delete(deleteAllDoc);

  router.route('/:id')
  .get(getDocbyId)
  
module.exports=router