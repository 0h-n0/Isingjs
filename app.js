#!/usr/bin/env node

'use strict';

var express = require("express");
var ArgumentParser = require("argparse").ArgumentParser;
var parser = new ArgumentParser({
    version: '1.0.0',
    addHelp: true,
    description: '2D Ising Simulation'
});

parser.addArgument(
    ['-t', '--height'],
    {
        help: 'set height.',
        defaultValue: 100,
        type: 'int'
    }
);
app
parser.addArgument(
    ['-w', '--width'],
    {
        help: 'set width.',
        defaultValue: 100,
        type: 'int'
    }
);


parser.addArgument(
    ['-t', '--temperture'],
    {
        help: 'set temperture.',
        defaultValue: 3,
        type: 'int'
    }
);

var args = parser
var app = express();

const main = () => {
    var server = app.listen(8080, function(){
        console.log(`PORT: ${server.address().port}`);
    });
    app.set('view engine', 'ejs');
    app.use('/static', express.static(__dirname + 'public'));
    app.get("/" ,function(req, res, next){
        res.render("views/index", {});
    });
}

if (require.main === module) {
    main();
}
    
