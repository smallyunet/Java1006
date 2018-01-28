
// 程序会报出相应有错误的函数

function someFunction() {
    return undefinedVar;    // undefined
}

function notDefined() {
    try {
        someFunction(); // now defined
    } catch (e) {
        console.error(e);
    }
}

notDefined();