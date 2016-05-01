# Catberry Pug Adapter

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/catberry/main?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge)

It is an adapter for [Pug](http://pug-lang.com/) template engine
that makes possible to use it from [Catberry](https://github.com/catberry/catberry) application.

## Installation

```bash
npm install catberry-pug --save
```

## Usage
You can use the adapter in ./browser.js, ./server.js or ./build.js as following:

```javascript
const pug = require('catberry-pug');
const cat = catberry.create(config);
pug.register(cat.locator);
```

In fact, [Catberry CLI](https://github.com/catberry/catberry-cli) does it for you.

## Contributing

There are a lot of ways to contribute:

* Give it a star
* Join the [Gitter](https://gitter.im/catberry/main) room and leave a feedback or help with answering users' questions
* [Submit a bug or a feature request](https://github.com/catberry/catberry-pug/issues)
* [Submit a PR](https://github.com/catberry/catberry-pug/blob/develop/CONTRIBUTING.md)

Miha Vizovišek <miha.vizovisek@gmail.com>
