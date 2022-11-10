const PirateController = require("../controllers/pirate.controller");

module.exports = function (app) {
    app.get('/pirates-api', PirateController.findAllPirates);
    app.post("/pirates-api", PirateController.createNewPirate);
    app.get('/pirates-api/:id', PirateController.findPirateById);
    app.put('/pirates-api/:id', PirateController.updatePirateById);
    app.delete('/pirates-api/:id', PirateController.deletePirateById);
}