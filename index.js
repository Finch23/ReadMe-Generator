var inquirer = require('inquirer');
var fs = require('fs');
var axios = require('axios');

inquirer
    .prompt({
        message: 'What is your Github username?',
        name: 'username'
    })
    .then(function({ username }) {
        const queryUrl = `https://api.github.com/users/${username}`;

        axios.get(queryUrl).then(function(data) {
            console.log(data);
        });
    })
