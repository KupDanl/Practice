function getList(req, res){
    res.json([{id: 1, name: "courses"}]);
}

module.exports = {
    getList
}