//https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp

//https://www.w3schools.com/jsref/dom_obj_html_nodelist.asp
//노드 리스트

//노드리스트는 배열이 아니다

let myNode = document.getElementById(`p2`);
//myNode 노드를 p2로 지정

// parentNode
let ptNode = myNode.parentNode;
//<div id="wrap"></div>
//부모노드를 <div id=wrap></div>으로 지정
console.log(ptNode);

//parentNode: [object HTMLDivElement]
console.log(`parentNode: ${ptNode}`);
ptNode.style.color = "blue";

//////////////////////////////////
//previousSibling : 이전 노드를 불러올때 씀

let prevNode = myNode.previousSibling;
//prevNode:[object Text]
//mynode로 설정한 p2의 이전 노드인 p1노드 를 지정
console.log(`prevNode:${prevNode}`);

prevNode = prevNode.previousSibling;
//prevNode:[object HTMLParagraphElement]
console.log(`prevNode:${prevNode}`);

//////////////////
//nextSibling
let nextNode = myNode.nextSibling;
console.log(`nextNode:${nextNode}`);
//nextNode:[object Text]

nextNode = nextNode.nextSibling;
console.log(`nextNode:${nextNode}, ${nextNode.innerText}`);
//nextNode:[object HTMLParagraphElement], coment3

let prevEleNode = myNode.previousElementSibling;
console.log(`previousElement:${prevEleNode}, ${prevEleNode.innerText}`);
//previousElement:[object HTMLParagraphElement], coment1

let nextEleNode = myNode.nextElementSibling;
console.log(`nextEleNode:${nextEleNode}, ${nextEleNode.innerText}`);
//nextEleNode:[object HTMLParagraphElement], coment3

/////////////////////
//childNodes
let divNode = document.getElementById("wrap");
//divNode:[object HTMLDivElement]
console.log(`divNode:${divNode}`);

let divChildesNode = divNode.childNodes;
console.log(`divChildesNode:${divChildesNode}`);
//divChildsNode:[object NodeList]
console.log(divChildesNode);

//////////////////////
//children
let divChildren = divNode.children;
console.log(`divChildren:${divChildren}`);
//divChildren:[object HTMLCollection]
console.log(divChildren);
/*
HTMLCollection(3) [p#p1, p#p2, p#p3, p1: p#p1, p2: p#p2, p3: p#p3]
0: p#p1
1: p#p2
2: p#p3
p1: p#p1
p2: p#p2
p3: p#p3
length: 3
[[Prototype]]: HTMLCollection
*/
console.log(divChildren[0]);
//<p id="p1">coment1</p>
console.log(divChildren.item(0));
//<p id="p1">coment1</p>
console.log(divChildren.namedItem("p1"));
//<p id="p1">coment1</p>

let pNode = document.getElementById("p4");
let aNode = pNode.firstChild;
console.log(aNode);
//본문엔 p4 첫줄에 공백이 있어 텍스트를 가져옴

aNode = pNode.firstElementChild;
console.log(aNode);
//<img src="images/gosu.jpg" alt="영화배우 고수"></img>
//본문의 p4의 첫번째 요소를 가져와 이미지가 출력됨

///////////////////////////
//getAttribute('속성명'), setAttribute('속성명', '값')
//객체.속성명 , 객체.속성명='값'
let aAttrNode = aNode.getAttribute("src"); //요소를 가져오는 getAttribute
console.log(aAttrNode);
//images/gosu.jpg
//메서드를 이용해 가져올때는 지정한것만 가져옴

aAttrNode = aNode.src;
console.log(aAttrNode);
//http://127.0.0.1:5500/images/gosu.jpg
//소스만 가져올떄는 전체적인 주소를 가져옴

aNode.setAttribute("title", "스타배우");
console.log("title");

aNode.id = "imgGosu"; //객체.속성명 = ''
console.log(aNode.id);
