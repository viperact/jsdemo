let pNode = document.getElementById("wrap");
console.log(`${pNode.nodeType} ${pNode.nodeName}, ${pNode.nodeValue}`);
//1 P, null

let pAttr = pNode.attributes; //속성명들을 가져옴
console.log(pAttr);
//NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}

console.log(pAttr[0]);
//id = 'wrap'
console.log(pAttr.id);
//id = 'wrap'
console.log(pAttr.length);
//2
console.log(
  `${pAttr[0].nodeType}, ${pAttr[0].nodeName}, ${pAttr[0].nodeValue}`
);
//2, id, wrap

let pIdAttr = pNode.getAttribute("id"); //속성값을 가져옴
console.log("pIdAttr");
//pIdAttr

let textNode = pNode.firstChild;
console.log(textNode);
//'content'

console.log(
  `${textNode.nodeType}, ${textNode.nodeName}, ${textNode.nodeValue}`
);
//3, #text, content

//////////////////////////////////////////
//innerText, innerHTML : 요소의 컨텐츠를 가져옴 (text, html)

let bodyNode = document.getElementsByTagName("body")[0];
console.log(bodyNode.innerText); // body에 있는 모든 text를 리턴 / innerText
//content
console.log(bodyNode.innerHTML); //body에 있는 모든 자원들을 리턴 (html을 다 가져옴) / innerHTML

/////////////////////////////////////
//value (입력한 값이 저장되는곳) input type text, password 등 모두 value값을 가지고있음
let fname = document.querySelector(`#fname`);
console.log(fname.value);
//홍길동
