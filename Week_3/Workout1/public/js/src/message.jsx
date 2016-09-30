var React = require('react');


var ListItem = React.createClass({
    getInitialState: function() {
        return {
            liked: false
        };
    },
    handleClick: function() {
        this.setState({
            liked: !this.state.liked
        })
    },
    render: function() {
        const text = this.state.liked ? 'like' : 'haven\'t liked';
	    return (
	      <div onClick={this.handleClick}>
	        You {text} this. Click to toggle.
	      </div>
	    );
    }
});

module.exports = ListItem;
