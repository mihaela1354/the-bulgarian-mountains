const models = require('../models')

exports.getAll = (req, res, next) => {
    models.Mountain.find().lean().then(mountains => {
        res.status(200).json(mountains)
    }).catch(console.log);
}

exports.create = (req, res, next) => {
    const { name, rating } = req.body;
    const mountain = new models.Mountain({
        id: new Date().toISOString(),
        name: name,
        imageUrl: 'images\rila-haram.jpg',
        rating: rating,
        huts: [],
        routes: []
    });
    mountain.save().then(model => {
        res.status(201).json({
            message: "Mountain created successfully!",
            mountain: { ...model }
        })
    })
}