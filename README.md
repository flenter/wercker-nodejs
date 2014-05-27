## Wercker Node.js SDK and CLI


## Code Status

[![wercker status](https://app.wercker.com/status/71e3415efc514b5ed9ced8800db09c23/m "wercker status")](https://app.wercker.com/project/bykey/71e3415efc514b5ed9ced8800db09c23)

## Documentation

#### Installation

* `npm install wercker -g` - To use cli
* `npm install wercker --save` - To use sdk

#### Usage

##### CLI
```
$ wercker
-----------------------
welcome to wercker-cli
-----------------------

Usage:
    wercker create - NOT IMPLEMENTED
    wercker status - NOT IMPLEMENTED
    wercker deploy - NOT IMPLEMENTED
    wercker builds
    wercker open targets - NOT IMPLEMENTED
    wercker open - NOT IMPLEMENTED
    wercker queue - NOT IMPLEMENTED
    wercker apps
    wercker link - NOT IMPLEMENTED
    wercker login
    wercker logout
    wercker targets add - NOT IMPLEMENTED
    wercker targets list - NOT IMPLEMENTED
    wercker targets details - NOT IMPLEMENTED
    wercker --version
```

##### SDK
``` javascript
var Wercker = require('wercker');
var wercker = new Wercker();
var user = {
    "login": "person",
    "password": "p@ssw@rd"
};

wercker.request_oauth_token(user.login, user.password, function (err, result) {
    if (err) { throw err; }
    console.log(result);
});
```

## License

Wercker Node.js SDK and CLI is released under the [MIT License](https://github.com/felipe/wercker-nodejs/blob/master/LICENSE).
