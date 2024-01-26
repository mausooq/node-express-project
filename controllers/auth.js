const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModels')
//@desc get all contact
//@route GET api/contact
// @access public
exports.getContact =asyncHandler (async(req,res) => {
    const contacts =await Contact.find();
    res.status(200).json(contacts);
})
//@desc update new contact
//@route POST api/contact
//@access public
exports.createContact = asyncHandler (async (req,res) => {
    // console.log(req.body);
    const {name,email,phone} =req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("all fields filled")
    }
    const addContact = await Contact.create({
        name,
        email,
        phone
    })
    res.status(201).json(addContact);
})
//@desc get contact 
//@route GET api/contact/:id
//@access public
exports.getContacts = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("not found")
    }
    res.status(200).json(contact);

})
//@desc  update contact 
//@route PUT api/contact/:id
//@access public
exports.updateContact = asyncHandler (async (req,res) => {
    res.status(200).send(`update cont(act for ${req.params.id}`);
})
//@desc  delete  contact 
//@route DELETE api/contact/:id
//@access public
exports.deleteContact = asyncHandler ( async (req,res) => {
    res.status(200).send(`delete contact for ${req.params.id}`);
})