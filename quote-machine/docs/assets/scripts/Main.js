(function(d){function c(a){if(e[a])return e[a].exports;var b=e[a]={i:a,l:!1,exports:{}};d[a].call(b.exports,b,b.exports,c);b.l=!0;return b.exports}var e={};c.m=d;c.c=e;c.d=function(a,b,f){c.o(a,b)||Object.defineProperty(a,b,{configurable:!1,enumerable:!0,get:f})};c.n=function(a){var b=a&&a.__esModule?function(){return a["default"]}:function(){return a};c.d(b,"a",b);return b};c.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};c.p="";return c(c.s=0)})([function(d,c,e){e(1)},function(d,
c,e){var a=(d=e(2))&&d.__esModule?d:{default:d};(function(){(new a.default).pull(function(b){function a(){var a=Math.floor(Math.random()*b.collection.length),c=Math.floor(Math.random()*b.collection[a].character.length),d=Math.floor(Math.random()*b.collection[a].character[c].quotes.length);document.getElementById("quote").innerHTML=b.collection[a].character[c].quotes[d];document.getElementById("char-image").src=b.collection[a].character[c].picture;document.getElementById("char-name").innerHTML=b.collection[a].character[c].name;
document.getElementById("show").innerHTML=b.collection[a].show;document.getElementById("twitter").href='https://twitter.com/intent/tweet?hashtags\x3dquotes\x26text\x3d"'+b.collection[a].character[c].quotes[d]+'" - '+b.collection[a].show}a();document.getElementById("next-quote").onclick=function(){a()}})})()},function(d,c,e){Object.defineProperty(c,"__esModule",{value:!0});var a=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1;d.configurable=!0;"value"in
d&&(d.writable=!0);Object.defineProperty(a,d.key,d)}}return function(b,c,d){c&&a(b.prototype,c);d&&a(b,d);return b}}();d=function(){function b(){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");this.pull()}a(b,[{key:"pull",value:function(a){var b=new XMLHttpRequest;b.open("GET","https://raw.githubusercontent.com/mdawsondev/mini-scripts/master/json/quotes.json",!0);b.onreadystatechange=function(){4===this.readyState&&200===this.status&&a&&a(JSON.parse(this.responseText))};
b.send(null)}}]);return b}();c.default=d}]);