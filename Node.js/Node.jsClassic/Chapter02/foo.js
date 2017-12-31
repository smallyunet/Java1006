
/* npm及模块的使用，程序遍历数组并打印 */

var _ = require('underscore');

_.each([1, 2, 3], function(num){
    console.log("underscore.js says " + num);
});