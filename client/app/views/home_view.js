var View = require('./view');
var template = require('./templates/home');

module.exports = View.extend({
  id: 'home-view',
  template: template,

  initialize: function() {
    console.log('cocuou');
    console.log($('iframe').contents().height()); //=
    //this.contentWindow.document.body.offsetHeight + 'px';

  }

});
