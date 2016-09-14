/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var EXPERIMENT_FILE = path.join(__dirname, 'experiment.json');
var JS_FILE_TEMPLATE = path.join(__dirname, 'clientJsTemplate.js');
var JS_FILE_NAME = 'clientJs.js';
var JS_FILE = path.join(__dirname, JS_FILE_NAME);

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get(/\/api\/experiment\/.*/, function(req, res) {
  fs.readFile(EXPERIMENT_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var experiment = req.url.match(/\/api\/experiment\/(.*)/)[1];
    data = JSON.parse(data);
    var experimentData = data[experiment];

    res.json(experimentData);
  });
});

app.post('/api/experiment', function(req, res) {
  fs.readFile(EXPERIMENT_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    var experiment = req.body.experiment;
    var experimentData = req.body.data;

    var originalChanges = JSON.parse(data);

    if (!originalChanges[experiment]) {
      originalChanges[experiment] = {};
    }

    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    for(var key in experimentData) {
      originalChanges[experiment][key] = experimentData[key];
    }

    fs.writeFile(EXPERIMENT_FILE, JSON.stringify(originalChanges, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }

      fs.readFile(JS_FILE_TEMPLATE, 'utf-8', function(err, data) {
        if (err) {
          console.error((err));
          process.exit(1);
        }

        var result = data.replace(/#experimentdata/g, JSON.stringify(originalChanges));

        fs.writeFile(JS_FILE, result, 'utf8', function (err) {
          if (err) return console.log(err);

          var success = {
            fileUrl: req.protocol + '://' + req.get('host') + '/' + JS_FILE_NAME
          };
          
          res.json(success);
        });
      });

    });
  });
});


app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
