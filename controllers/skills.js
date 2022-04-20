// controllers/skills.js ??
const Skills = require('../models/skill');

module.exports = {
    index,
    show
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skills.getAll(),
        time: req.time
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skills.getOne(req.params.id),
    });
}
