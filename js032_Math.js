//js032_Math.js
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math

//최대값
console.log(Math.max(1, 2, 3, 4, 5)); //5

//최소값
console.log(Math.min(1, 2, 3, 4, 5)); //1

//절대값
console.log(Math.abs(-10)); //10

//반올림 - 자릿수 지정할 수 없음
console.log(Math.round(25.3533)); //25
console.log(Math.round(25.3533, 1));

//올림
console.log(Math.ceil(25.344)); //26

//버림 (소숫점뒷자리에 뭐가있든간에)
console.log(Math.floor(23.56)); //23

//난수 (0.0이상 ~ 1.0미만 아무거나)
console.log(Math.random());

//반올림 / ().toFixed(n) : 소숫점 n번째까지 반올림하여 표시
console.log((25.523).toFixed(2)); //25.52
console.log((25.526).toFixed(2)); //25.53
