
const info = (title, para, contactBtn, titleTwo, paraOne, paraTwo, paraThree) => {
    let div = document.createElement("div")
    div.className = "classInfo"
    div.innerHTML = `<h1>${title}</h1>
                     <p>${para}</p>
                     <button>${contactBtn}</button>
                     `
                     
    return div
}

export {info}
