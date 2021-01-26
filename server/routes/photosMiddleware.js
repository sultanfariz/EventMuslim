const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, '../upload/'); //store file at folder upload
    },
    filename: (req, file, cb)=>{
        cb(null, new Date().toISOString() + file.originalname);
    }
});
const fileFilter = (req, file, cb) =>{
    if(file.mimetype === ('image/jpeg' || 'image/jpg' || 'image/png')){
        cb(null, true);
    }else{
        cb(null, false);
    }
}
const upload = multer({
    storage:storage, 
    limits:{
        fileSize: 1024 * 1024 * 6 //Max file size = 6 MB
    },
    fileFilter: fileFilter
});


module.exports = upload;