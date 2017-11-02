
var environment = (process.env.NODE_ENV || "development").trim();

if (environment === "development") {
    module.exports = require("./webpack.dev.js");  
    return;
} else {
    module.exports = require("./webpack.prod.js");
    return;
}

module.exports = function (env) {
    console.log(env);
    return require(env);
}
