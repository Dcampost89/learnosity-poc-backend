var Learnosity = require('learnosity-sdk-nodejs');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    var learnositySdk = new Learnosity();
    var request = learnositySdk.init(
        // service type
        "author", 

        // security details
        {
            "consumer_key": "yis0TYCu7U9V4o7M",
            "domain":       "localhost",
        },

        // secret
        "74c5fd430cf1242a527f6223aebd42d30464be22",

        // request details
        {
            "mode": "item_edit",
            "reference": "f7f2f3ed-f64a-4fd7-9bdf-4da03f5eb4ec",
            "config": {
                "item_edit": {
                    "item": {
                    "reference": {
                        "edit": true
                    },
                    "dynamic_content": true,
                    "shared_passage": true
                    }
                }
            },
            "user": {
                "id": "demos-site",
                "firstname": "Demos",
                "lastname": "User",
                "email": "demos@learnosity.com"
            }
        }
    );

    res.render("index", { request: request } );
});

app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});