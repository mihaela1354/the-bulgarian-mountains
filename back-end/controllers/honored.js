const models = require('../models');

exports.get = (req, res, next) => {
    const { id } = req.body;
    models.Honor.findById(id).lean().then(honored => {
        res.status(200).json(honored)

    }).catch(console.log);
}

module.exports.getAll = (req, res, next) => {
    models.Honor.find({}).lean().then(honored => {
        res.status(200).json(honored)
    }).catch(console.log);
}

exports.create = (req, res, next) => {
    const { name, imageUrl, description, nationality } = req.body;
    
    console.log(req.file)
    const mountain = new models.Honor({
        id: new Date().toISOString(),
        name: name,
        imageUrl: req.file.filename,
        description,
        nationality
    });
    mountain.save().then(model => {
        res.status(201).json({
            message: "Alpinist created successfully!",
            honored: { ...model }
        })
    })
}

exports.delete = (req, res, next) => {
    const { id } = req.body;

    models.Honor.findOneAndDelete(id)
        .then(model => {
            console.log(model)
            res.status(200).json({
                message: "Alpinist deleted successfully!",
                honored: { ...model }
            })
        })
};

exports.edit = (req, res, next) => {
    const { id, name, imageUrl, description, nationality } = req.body;

    console.log(req.body);
    models.Honor.findOneAndUpdate(id, { name, imageUrl, description, nationality })
        .then(model => {
            res.status(200).json({
                message: "Alpinist edited successfully!",
                honored: { ...model }
            })
        })
}