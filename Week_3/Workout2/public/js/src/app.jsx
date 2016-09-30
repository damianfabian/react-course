
var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = require('./message.jsx');

if(document.getElementById('example'))
ReactDOM.render(
    <HelloWorld />,
    document.getElementById('example')
);

if(document.getElementById('sample'))
ReactDOM.render(
    <HelloWorld />,
    document.getElementById('sample')
);
