import { courseData } from "./Module.js"
import{courses,display,form,option1,option2,option3,option4,option5,option6,option7,
    para,yes,inputYes,breakLine,no,inputNo,par2,Yes,InputOffline,BreakLine,Online,
    InputOnline, par3, react, inputReact, breakLine1, angular, inputAngular} from "./Bmodule.js"

courses.appendChild(option1)
courses.appendChild(option2)
courses.appendChild(option3)
courses.appendChild(option4)
courses.appendChild(option5)
courses.appendChild(option6)
courses.appendChild(option7)


let myFunction = () =>{

form.innerHTML = "";
let courseSelected = courses.value;
let opt3 = option3.value
// console.log('I NEED MONEY')

option1.innerHTML = 'Web Development'
option2.innerHTML = 'Desktop Publishing'
option3.innerHTML = 'Graphics Design'
option4.innerHTML = 'Kids Code$phython'
option5.innerHTML = 'Electronics'
option6.innerHTML = 'Computer Hardware Repairs and Maintenance'
option7.innerHTML = 'Digital Marketing'

form.appendChild(para)
form.appendChild(inputYes)
form.appendChild(yes)
form.appendChild(breakLine)
form.appendChild(inputNo)
form.appendChild(no)
form.appendChild(par2)
form.appendChild(InputOnline)
form.appendChild(Online)
form.appendChild(BreakLine)
form.appendChild(InputOffline)
form.appendChild(Yes)


class courseDetails{
    constructor(title, price, description, location){
        this.title = title;
        this.price = price;
        this.description = description;
        this.location = location;

        this.detalis = () =>{

            return `Course: ${this.title} <br>
             Price: ${this.price} <br>
             Description: ${this.description} <br> 
             Location: ${this.location}` 
        }
    }
}

class webDev extends courseDetails{
    constructor(title,price,description,location,framework){
        super(title,price,description,location)
        this.framework = framework

        this.webdev = () =>{
             return`${this.detalis()} <br> Framework to learn: ${this.framework}`
        }
    }
}
let checkInput = [inputYes,inputNo,InputOnline,InputOffline,inputReact,inputAngular]
let allInput = []

checkInput.forEach((item)=>{
    allInput.push(item)
}) 

for(let i = 0; i < courseData.length; i++){
    let actualPrice = courseData[i].price
    let increasePrice = Number(actualPrice) + 15000;
    let IncreasePrice = Number(actualPrice) + 10000;
    let addPrice =  20000;
    let AddPrice =  300000;
    let frameA = "Angular"

    if(courses.value === courseData[i].courseTitle){
        if(courseData[i].courseTitle === 'Web Development'){
            form.appendChild(par3)
            form.appendChild(inputReact)
            form.appendChild(react)
            form.appendChild(breakLine1)
            form.appendChild(inputAngular)
            form.appendChild(angular)          
        }

        allInput.forEach((inputs)=>{
            inputs.addEventListener('click', ()=>{
                if(inputYes.checked && InputOnline.checked){
                    let newcourse = new courseDetails(courseData[i].courseTitle,actualPrice,courseData[i].courseDescription,courseData[i].location)
                    display.innerHTML = newcourse.detalis()
                }else if(inputYes.checked && InputOffline.checked){
                    let newcourse = new courseDetails(courseData[i].courseTitle,increasePrice,courseData[i].courseDescription,courseData[i].location)
                    display.innerHTML = newcourse.detalis()
                }else if(inputNo.checked && InputOnline.checked){
                    let newcourse = new courseDetails(courseData[i].courseTitle,actualPrice,courseData[i].courseDescription,courseData[i].location)
                    display.innerHTML = newcourse.detalis()
                }else if(inputNo.checked && InputOffline.checked){
                    let newcourse = new courseDetails(courseData[i].courseTitle,IncreasePrice,courseData[i].courseDescription,courseData[i].location)
                    display.innerHTML = newcourse.detalis()
                } 
                if(inputYes.checked && InputOnline.checked && inputReact.checked){
                    let newcourse = new webDev(courseData[i].courseTitle,(actualPrice + addPrice),courseData[i].courseDescription,courseData[i].location,courseData[i].frameWork);
                    display.innerHTML = newcourse.webdev()
                }else if(inputYes.checked && InputOnline.checked && inputAngular.checked){
                    let newcourse = new webDev(courseData[i].courseTitle,(actualPrice + AddPrice),courseData[i].courseDescription,courseData[i].location,frameA);
                    display.innerHTML = newcourse.webdev()
                }else if(inputYes.checked && InputOffline.checked && inputReact.checked){
                    let newcourse = new webDev(courseData[i].courseTitle,(increasePrice + addPrice),courseData[i].courseDescription,courseData[i].location,courseData[i].frameWork);
                    display.innerHTML = newcourse.webdev()
                }else if(inputYes.checked && InputOffline.checked && inputAngular.checked){
                    let newcourse = new webDev(courseData[i].courseTitle,(increasePrice + AddPrice),courseData[i].courseDescription,courseData[i].location,frameA);
                    display.innerHTML = newcourse.webdev()
                }else if(inputNo.checked && InputOnline.checked && inputReact.checked){
                    let newcourse = new webDev(courseData[i].courseTitle,(actualPrice + addPrice),courseData[i].courseDescription,courseData[i].location,courseData[i].frameWork);
                    display.innerHTML = newcourse.webdev()
                }else if(inputNo.checked && InputOnline.checked && inputAngular.checked){
                    let newcourse = new webDev(courseData[i].courseTitle,(actualPrice + AddPrice),courseData[i].courseDescription,courseData[i].location,frameA);
                    display.innerHTML = newcourse.webdev()
                }else if(inputNo.checked && InputOffline.checked && inputReact.checked){
                    let newcourse = new webDev(courseData[i].courseTitle,(IncreasePrice + addPrice),courseData[i].courseDescription,courseData[i].location,courseData[i].frameWork);
                    display.innerHTML = newcourse.webdev()
                }else if(inputNo.checked && InputOffline.checked && inputAngular){
                    let newcourse = new webDev(courseData[i].courseTitle,(IncreasePrice + AddPrice),courseData[i].courseDescription,courseData[i].location,frameA);
                    display.innerHTML = newcourse.webdev()
                }
            })
        })
    }
};
}
myFunction()
courses.addEventListener('click', myFunction);