const asyncHandler = require('express-async-handler')
//@desc get all contact
//@route GET api/contact
// @access public
exports.getContact =asyncHandlerasync (async(req,res) => {
    res.status(200).send('get all contacts');
})
//@desc update new contact
//@route POST api/contact
//@access public
exports. createContact=asyncHandler(async (req,res) => {
    console.log(req.body);
    const {name,email,phone} =req.body;
    if(!name ||!email || !phone){
        res.status(400);
        throw new Error("all fields filled")
    }
    res.status(201).send('create new contacts');
})
//@desc get contact 
//@route GET api/contact/:id
//@access public
exports.getContacts = asyncHandler(async (req,res) => {
    res.status(200).send(`get contact for ${req.params.id}`);
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