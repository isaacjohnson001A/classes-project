let courses = document.getElementById('courses')
let display = document.getElementById('display')
let form = document.getElementById('form')
let option1 = document.createElement('option')
let option2 = document.createElement('option')
let option3 = document.createElement('option')
let option4 = document.createElement('option')
let option5 = document.createElement('option')
let option6 = document.createElement('option')
let option7 = document.createElement('option')

let para = document.createElement('p');
para.innerText = 'Do you have a computer';
let yes = document.createElement('label');
yes.innerText = 'Yes';
let inputYes = document.createElement('input');
inputYes.setAttribute("class", "input")
inputYes.type = 'radio';
inputYes.value = 'Yes';
inputYes.name = 'option';

let breakLine = document.createElement('br');

let no = document.createElement('label');
no.innerText = 'No';
let inputNo = document.createElement('input');
inputNo.setAttribute("class", "input")
inputNo.type = 'radio';
inputNo.value = 'No';
inputNo.name = 'option';

let par2 = document.createElement('p');
par2.innerText = 'Mode of learning';

let Yes = document.createElement('label');
Yes.innerText = 'Offline';
let InputOffline = document.createElement('input');
inputNo.setAttribute("class", "input")
InputOffline.type = 'radio';
InputOffline.name = 'option2';

let BreakLine = document.createElement('br');

let Online = document.createElement('label');
Online.innerText = 'Online';
let InputOnline = document.createElement('input');
InputOnline.setAttribute("class", "input")
InputOnline.type = 'radio';
InputOnline.name = 'option2';

let par3 = document.createElement('p')
par3.innerText = 'Framework to learn'
let react = document.createElement('label')
react.innerText = 'React'
let inputReact = document.createElement('input')
inputReact.setAttribute("class", "Input")
inputReact.type = 'radio'
inputReact.name = 'option3'

let breakLine1 = document.createElement('br')

let angular = document.createElement('label')
angular.innerText = 'Angular'
let inputAngular = document.createElement('input')
inputAngular.setAttribute("class", "Input")
inputAngular.type = 'radio'
inputAngular.name = 'option3'

export{para,yes,inputYes,breakLine,no,inputNo,par2,Yes,InputOffline,BreakLine,Online,
InputOnline, par3, react, inputReact, breakLine1, angular, inputAngular};
export{courses,display,form,option1,option2,option3,option4,option5,option6,option7};