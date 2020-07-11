exports.getAll = (req, res, next) => {
    res.status(200).json({
        mountains: [
            { id: new Date().toISOString(), name: "Rila", rating: 0, huts: [], routes: [] }
        ]
    });
}

exports.create = (req, res, next) => {
    const { name, rating } = req.body;

    console.log(req.body)
    //db
    res.status(201).json({
        message: "Mountain created successfully!",
        mountain: { id: new Date().toISOString(), name: name, rating: rating, huts: [], routes: [] }
    })
}