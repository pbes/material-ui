let React = require('react');
let SvgIcon = require('../../svg-icon');

let ActionTheaters = React.createClass({

  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
      </SvgIcon>
    );
  }

});

module.exports = ActionTheaters;