const db = require('../models')

module.exports = {
    findAll: function(req, res) {
      db.Budget
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    findById: function(req, res) {
        db.Budget
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
      },
      update: function(req, res) {
        db.Budget
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
      },
}
