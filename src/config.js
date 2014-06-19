"use strict";

exports.defaults = function() {
  return {
    cjsx: {
      extensions: ["cjsx"],
      options: {}
    }
  };
};

exports.placeholder = function() {
  return "\t\n\n" +
         "  cjsx:                     # config settings for the cjsx compiler module\n" +
         "    lib: undefined          # use this property to provide a specific version of cjsx-tools\n" +
         "    extensions: [\"cjsx\"]  # default extensions for cjsx files\n" +
         "    options: {}             # default options will get passed to coffee compiler\n";
};

exports.validate = function(config, validators) {
  var errors = [];

  if ( validators.ifExistsIsObject( errors, "cjsx config", config.cjsx ) ) {

    if ( !config.cjsx.lib ) {
      config.cjsx.lib = require( "coffee-react" );
    }

    if ( validators.isArrayOfStringsMustExist( errors, "cjsx.extensions", config.cjsx.extensions ) ) {
      if (config.cjsx.extensions.length === 0) {
        errors.push( "cjsx.extensions cannot be an empty array");
      }
    }

  }

  return errors;
};
