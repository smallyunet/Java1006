// 使用断言测试
var assert = require('assert');

// 测试成功不会提示任何消息
assert.strictEqual("hello", "hello");

// 测试失败会抛出异常
// 将这句注释掉，因为抛出异常，程序会终止执行
// assert.strictEqual("hello", "there");

// 给断言传递第三个参数，异常抛出时显示
assert.equal("hello", "there2", "Message to show if an exeption is thrown");