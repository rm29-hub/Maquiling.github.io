import{info} from "./info.js"
import{img, imgOne, imgTwo, imgThree} from "./img.js"
import{card} from "./card.js"

const data ={
    title       : "This is title",
    para        : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste enim accusamus quaerat nobis doloribus inventore, necessitatibus ducimus sint nihil atque ex debitis vitae recusandae officia. Expedita, illum.",
    contactBtn  : "Contact Me",
    myImage     : "girlimage1.jpg"
}

const datatwo ={
    titleTwo: "PROJECT COMPLETED",
    imageOne: "Project.jpg",
    paraOne: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste enim accusamus quaerat nobis doloribus inventore, necessitatibus ducimus sint nihil atque ex debitis vitae recusandae officia. Expedita, illum.",

    imageTwo: "projectTwo.jpg",
    paraTwo: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste enim accusamus quaerat nobis doloribus inventore, necessitatibus ducimus sint nihil atque ex debitis vitae recusandae officia. Expedita, illum.",

    imageThree: "projectThree.jpg",
    paraThree: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste enim accusamus quaerat nobis doloribus inventore, necessitatibus ducimus sint nihil atque ex debitis vitae recusandae officia. Expedita, illum."
}

const {title, para, contactBtn, myImage} = data
const {titleTwo, imageOne, paraOne, imageTwo,  paraTwo, imageThree, paraThree} = datatwo

let sectionOne = document.getElementById("sectionOne")
let sectionTwo = document.getElementById("sectionTwo")

sectionOne.append(info(title, para, contactBtn))
sectionOne.append(img(myImage))
sectionTwo.append(card(titleTwo, paraOne, paraTwo, paraThree))
sectionTwo.append(imgOne(imageOne))
sectionTwo.append(imgTwo(imageTwo))
sectionTwo.append(imgThree(imageThree))