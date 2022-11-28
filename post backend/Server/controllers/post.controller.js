const model = require('../models');

exports.create = (req,res)=>{
    const post = {
        title : req.body.title,
        text : req.body.text,
        like : req.body.like
    };
    model.Post.create(post).then(result=>{
        res.status(201).json(result);
    }).catch(error=>{
        res.status(500).json({
            message: "Something Went Wrong.",
            error: error
        });
    });
}

exports.find = (req,res)=>{
    const id = req.params.id;
    model.Post.findByPk(id).then(result=>{
        res.status(200).json(result);
    }).catch(error=>{
        res.status(500).json({
            message: "Something went wrong.",
            error: error
        });
    });
}

exports.findAll = (req,res)=>{
    model.Post.findAll().then(result=>{
        res.status(200).json(result);
    }).catch(error=>{
        res.status(500).json({
            message: "Something went wrong.",
            error: error
        });
    });
}

exports.update = (req,res)=>{
    const id = req.params.id;
    const post = {
        title : req.body.title,
        text : req.body.text,
        like : req.body.like
    };

    model.Post.update(post,{where : {id: id}}).then(result=>{
        res.status(200).json({
            message: "Result updated Successfully.",
            result: result
        });
    }).catch(error=>{
        res.status(500).json({
            message : "something went wrong",
            error : error
        });
    });
}

exports.delete = (req,res)=>{
    const id = req.params.id;
    models.Student.destroy({where: {id: id}}).then(result=>{
        res.status(200).json({
            message: "Result deleted Successfully.",
            result: result
        });
    }).catch(error=>{
        res.status(500).json({
            message : "something went wrong",
            error : error
        });
    });
}