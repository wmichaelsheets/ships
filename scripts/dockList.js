import { getDocks } from "./database.js"

                

// document.addEventListener(
//     "click",
//     (clickEvt) => {
//         const cityTarget = clickEvt.target

//         if (cityTarget.dataset.type === "city" ) {
//             window.alert(`${cityTarget.dataset.walkername} is servicing this city`)
//         }
        
//     }

// )

export const dockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"
    
    for (const dock of docks) {
        docksHTML += `<li>${dock.location}</li>`
        }

    docksHTML += "</ul>"

    return docksHTML
}

