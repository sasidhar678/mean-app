exports.index = function (req, res) {
    res.render('index');
};

exports.templates = function (req, res) {
    var name = req.params.name;
    res.render('tmpl/' + name);
};