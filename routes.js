'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
    .get(jsonku.index);

    app.route('/tampil')
    .get(jsonku.tampildatasparepart);

    app.route('/tampilmontir')
    .get(jsonku.tampildatamontir);

}