React = require('react');
ReactDOM = require('react-dom');

var HelloWorld = require('./message.jsx');

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('example')
);