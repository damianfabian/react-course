
var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = require('./message.jsx');


ReactDOM.render(
    <HelloWorld />,
    document.getElementById('example')
);

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('sample')
);
