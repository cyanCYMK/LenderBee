var actions = require('../actions/actions');
var request = require('superagent');
var Reflux = require('reflux');

var lentStore = Reflux.createStore({
    listenables: [actions],
    data: {items: []},
    
    onRequestLentPage: function() {
      console.log('INSIDE STORE LENT NOW');
      var that = this;
        request("/api/items/:user", function(res){
          //TODO: Endpoint will query DB for user
          that.data.items = JSON.parse(res.text);
          console.log('LENT ITEMS', that.data.items)
          that.trigger(that.items);
        })
      },

    // onSearchSubmit: function() {
    //     // this.searchInput = $('#searchBar').val();
    //     // console.log('SEARCHINP', this.searchInput);
    //     // $('#searchBar').val('');
    //     this.init();
    // },

    getInitialState: function() {
        return this.data;
    }
});

module.exports = lentStore;