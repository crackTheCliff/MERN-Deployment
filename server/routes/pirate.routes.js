const PirateController = require("../controllers/pirate.controller");

module.exports = function (app) {
    app.get('/api/pirates', PirateController.findAllPirates);
    app.post("/api/pirates", PirateController.createNewPirate);
    app.get('/api/pirates/:id', PirateController.findPirateById);
    app.put('/api/pirates/:id', PirateController.updatePirateById);
    app.delete('/api/pirates/:id', PirateController.deletePirateById);
}