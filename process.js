const fs = require("fs");

//生成6位的随机数就定义100000-999999之间
const min = 100000; //最小值
const max = 999999; //最大值
const range = max - min; //取值范围差
const random = Math.random(); //小于1的随机数
const result = min + Math.round(random * range); //最小数加随机数*范围差
console.log("生成的OTP：" + result);

fs.readFile("./otp", "utf8", function (err, data) {
  console.log("Error?:" + err);
  const temp = data;
});

const temp = temp.replace("[[top-code]]", result);
console.log(temp);
fs.writeFile("./otp.html", temp, function (err) {
  if (err) {
    return console.log(err + ", 写入失败");
  }
  console.log("写入成功");
});
