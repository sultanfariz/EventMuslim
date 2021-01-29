const OrganizerModel = require('../models/Organizer')
const bcrypt = require('bcryptjs')
const { Op } = require('sequelize')
const docs = require('simple-rest-docs')
const session = require('express-session')

const options = {
    files: ['./register.js'],
    output: './README.md'
}

docs(options)

// MIGRASI REGISTER //
exports.register = async (req, res) => {
    try {
        const {email, password, nama_organizer} = req.body;

        //validate form
        if(email && password && nama_organizer){
            //validate existed user
            const getOrganizer = await OrganizerModel.findOne({
                where: {
                    // [Op.or]: [{username: username},{email:email}]
                    email:email
                }
            });
            if(!getOrganizer){
                await bcrypt.hash(req.body.password, 10).then(async (hash)=>{
                    const newOrganizer =  await new OrganizerModel({
                        nama_organizer, email, password: hash
                    })
                    await newOrganizer.save();
                    const message = "Organizer successfully registered!";
                    res.json({newOrganizer, message:message});
                })
            }else{throw({message: "email existed!"})}
        }else{throw({message: "please fill the form correctly!"})}
    } catch (err) {
        console.error(err.message);
        res.status(500).json(err);
    }
}

exports.index = async (req, res) => {
    try {
        const getAllOrganizer = res.json(await OrganizerModel.findAll({}));
    } catch (err) {
        console.error(err.message);
        res.status(500).json(err);
    }
}

exports.show = async (req, res) => {
    try {
        const id = req.params.id;
        const getOrganizer = res.json(await OrganizerModel.findOne({
            where: {id:id}
        }));

    } catch (err) {
        console.error(err.message);
        res.status(500).json(err);
    }
}

exports.edit = async (req, res) => {
    try {
        const {email, nama_organizer, nomor_hp, password, instagram, facebook, whatsapp} = req.body;
        const id = req.params.id;
        
        bcrypt.hash(req.body.password, 10).then(async (hash)=>{
            const editOrganizer = await OrganizerModel.update({
                email, nama_organizer, nomor_hp, password: hash, instagram, facebook, whatsapp
            },{where: {id:id}});
            await editOrganizer; 
            return res.json({editUser:{id, email, nama_organizer, nomor_hp, password: hash, instagram, facebook, whatsapp}, message:'User successfully edited!'});
        })

    } catch (err) {
        console.error(err.message);
        return res.status(500).json({message:"server error"});
    }
}

exports.delete = async (req, res) => {
    try {
        const id= req.params.id;
        const deleteOrganizer = await OrganizerModel.destroy({
            where: {id:id}
        });
        await deleteOrganizer; 
        res.json({message:"Organizer successfully deleted!"})
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
}

// MIGRASI LOGIN //
exports.auth = async (req, res) => {
    let sess = req.session;
    console.log('This session has an id of ', sess.id);
    res.send({userId: sess.id})
}

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;

        if(email && password){
            const getOrganizer = await OrganizerModel.findOne({
                where: {email:email}
            });
            if(!getOrganizer){
                return res.status(401).json({message:"Email tidak terdaftar"});
            }
            bcrypt.compare(req.body.password, getOrganizer.password).then(result=>{
                if(result){
                    req.session.userId = getOrganizer.id;
                    // console.log("berhasil login");
                    return res.status(200).json({message: "Selamat anda berhasil login", email: email});
                }else{
                    // console.log("gagal login");
                    return res.status(401).json({message: "Password salah !"});
                }
            });
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({message:"server error"});
    }
}

exports.logout = async (req, res) => {
    req.session.destroy((err)=>{
        // if(err){}
        res.clearCookie(req.session);
    })
}
