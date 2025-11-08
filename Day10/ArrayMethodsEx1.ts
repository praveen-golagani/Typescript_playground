let automationTools:string[] = ['playwright','selenium','appium'];
let coder:string[]=['Java','Python','TS','JS'];
//length
console.log(`AutomationTools array contains ${automationTools.length} element/elements`);
//push  - adds single/multiple elements to end
console.log('Before - ',automationTools);
automationTools.push('restassured','cypress');
console.log('After  - ',automationTools);
// pop - removes last element
let removedEle = automationTools.pop();
console.log('popped out - ',removedEle);
console.log('pop used  - ',automationTools);
// shift - removes first ele
let firstVal = automationTools.shift();
console.log(firstVal);
console.log('shift applied  - ',automationTools);
// unshift exact opposite of push
//adds single/multiple elements to beginning of an array
automationTools.unshift('praveen','test');
console.log('unshift applied  - ',automationTools);
//concat - combines two or more arrays of same type
let combRes:string[] = automationTools.concat(coder);
console.log(combRes);
//slice extract a section of array
//start index and end index
//end index excluded

let slicedRes = combRes.slice(4,8);
console.log(slicedRes); //4,5,6,7

//splice- adds/removes ele from array at any position
//start,deletecount
slicedRes.splice(0,2);
console.log(slicedRes); 
slicedRes.splice(1,0,'matrix','olga');
console.log(slicedRes); 
//with deletion count 
slicedRes.splice(1,2,'ford','rock');
console.log(slicedRes); 
// indexOf
console.log(slicedRes.indexOf('rock'));
//if not returns -1 
console.log(slicedRes.indexOf('rocket'));
// indexOf
let codeLang:string[]=['Java','C','Python','TS','JS'];
console.log(codeLang.indexOf('TS',2));
console.log(codeLang.indexOf('TS',4));
//includes - element exist t/f
let isJavaPresent:boolean = codeLang.includes('java');
console.log(isJavaPresent);
//exact
console.log(codeLang.includes('Java'));
//number to string 
let marks:number[] = [100,45,66,88];
let strMarks = marks.toString();
console.log(marks);
console.log(strMarks);
console.log(typeof(marks[0]));
console.log(strMarks[0]);
console.log(typeof(strMarks[0]));