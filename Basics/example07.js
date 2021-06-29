/* *****************  MODULES   ***************** */

const queryString = require('querystring');

var curURL = new URL("https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=next&oquery=query&tqi=hLWiklprvh8ssnOFwu4ssssssow-242270");
var param = queryString.parse(curURL.search);

console.log("요청 파라미터 중 query 의 값 : %s", param.query);
console.log(curURL.searchParams.get('query'));
console.log("원본 요청 파라미터 : %s", curURL.search);
console.log(curURL.toString());



