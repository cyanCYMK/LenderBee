var React = require('react');
var Reflux = require('reflux');
//var reviewStore = require('../stores/reviewStore.js');
var actions = require('../actions/actions.js');
var fb = require('../fb.js');

var login = React.createClass({

  //listens to reviewStore
  //mixins: [Reflux.connect(reviewStore)],

  render: function(){
    return (
      <div>
        <div className="fb-login-button" onlogin="checkLoginState();" data-max-rows="1" data-size="large" data-show-faces="false" data-auto-logout-link="false"></div>
        <div id="status">
        </div>
      </div>
    )
  }
});

module.exports = login;
