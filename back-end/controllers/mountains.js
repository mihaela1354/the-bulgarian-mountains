exports.getAll = (req, res, next) => {
    res.status(200).json({
        mountains: [
            { id: new Date().toISOString(), name: "Rila", rating: 0, huts: [], routes: [] }
        ]
    });
}

exports.create = (req, res, next) => {
    const { name, rating } = req.body;
    //db
    res.status(201).json({
        message: "Mountain created successfully!",
        post: { id: new Date().toISOString(), name: name, rating: rating, huts: [], routes: [] }
    })
}