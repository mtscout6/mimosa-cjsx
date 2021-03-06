mimosa-cjsx
===========

## Overview

This is a [Coffeescript](http://coffeescript.org/) + [React/JSX](http://facebook.github.io/) compiler for the [Mimosa](http://mimosa.io/) build tool. It will precompile your `.cjsx` files using [coffee-react](https://github.com/jsdf/coffee-react)

## Usage

Add `'cjsx'` to your list of modules.  That's all!  Mimosa will install the module for you when you start `mimosa watch` or `mimosa build`.

## Functionality

This module will compile your Coffeescript + React/JSX files.

## Default Config

```javascript
cjsx: {
  lib: undefined,
  extensions: ["cjsx"]
}
```

* `lib`: You may want to use this module but may not be ready to use the latest version of the `coffee-react`. Using the `lib` property you can provide a specific version of `coffee-react` if the one being used by this module isn't to your liking. To provide a specific version, you must have it `npm install`ed into your project and then provide it to `lib`. For instance: `lib: require("coffee-react")`
* `extensions`: an array of strings, the extensions of your Coffeescript React/JSX files.
