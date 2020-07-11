exports.getAll = (req, res, next) => {
    res.status(200).json({ mountains: [
        { name: Rila, rating: 0, huts:[], routes:[]}
    ] });
}