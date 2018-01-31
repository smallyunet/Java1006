
### 断言

assert.equal()和assert.strictEqual()区别：

``` javascript
assert.equal("8", 8);           // true
assert.equal('', '0');          // false
assert.equal(0, '');            // true
assert.strictEqual("8", 8);     // false
assert.strictEqual('', '0');    // false
assert.strictEqual(0, '');      // false
```