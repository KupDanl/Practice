function getList(req, res){
    res.json([{id: 1, name: "teacher"}]);
}

module.exports = {
    getList
}