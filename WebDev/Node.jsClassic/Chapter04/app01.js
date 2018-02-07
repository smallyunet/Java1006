/* 剖析回调，回调函数的一种定义法，第三个参数作为回调函数被传递过来并执行 */

function haveBreakfast(food, drink, callback) {
    console.log('Having breakfast of ' + food + ', ' + drink);
    // 如果第三个参数存在并且类型为函数，则执行，即回调
    if(callback && typeof(callback) === 'function') {
        callback();
    }
}

haveBreakfast('toast', 'coffee', function() {
    console.log('Finished breakfast. Time to go to work!');
});

