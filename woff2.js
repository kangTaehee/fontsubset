var fs = require('fs');
var woff2 = require('woff2');
var input = fs.readFileSync('./Noto_Sans_KR/NotoSansKR-Regular.otf');
var output = 'NotoSansKR-Regular.woff2';
fs.writeFileSync(output, woff2.encode(input));