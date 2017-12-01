 ## mocha_deno
 > mocha是JavaScript的一种单元测试框架，既可以在浏览器环境下运行，也可以在Node.js环境下运行
 
 #### 开发
 * src文件夹 存放 待测试函数源码
 * test文件夹 存放 测试函数【测试文件后缀xx-test.js】，``mocha``模板，断言库
 > Notice: mocha默认会执行test目录下的所有测试，不要去改变默认目录
 
 #### 运行测试结果
 > 本项目以``hello.js``函数为例
 
（1）终端运行：``$ ./node_modules/mocha/bin/mocha``

（2）脚本:``mocha``运行

（3）浏览器运行
 * webpack配置：``build``:待测试函数源码压缩生成 ``outils.min.js``,``test``在浏览器打开项目地址
 * ``mocha init .``生成单元测试模板；``index.html``是测试单元入口，``tests.js``是测试用例文件
 * 每次Mocha发版，都会生成一个新的./mocha.js和./mocha.css文件，以便在浏览器中使用
 * 在加载测试脚本之前，使用``mocha.setup('bdd')``函数把测试模式设置为BDD接口，测试脚本加载完之后用``mocha.run()``函数来运行测试。
 * 在index.html插入待测试函数文件 ``outils.min.js``和断言库chai.js
 * 先运行``npm run build``生成压缩的测试函数，再运行``npm run test``将测试结果展示在浏览器上。
 
 