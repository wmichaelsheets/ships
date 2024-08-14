import { getHaulingShips } from "./database.js"      //#1



// document.addEventListener(
//     "click",
//     (theClickEvent) => {
//         const whatWasClickedOn = theClickEvent.target
        
//         if (whatWasClickedOn.dataset.type ==="walker") {
//             window.alert(`This walker works in ${whatWasClickedOn.dataset.city}`)
//         }

        
//     }
// )


export const Haulers = () => {
    const haulers = getHaulingShips()
    let haulerHTML = "<ul>"

    for (const hauler of haulers) {                                         
        haulerHTML += `<li>${hauler.name}</li>`         
    }

    haulerHTML += "</ul>"

    return haulerHTML                      
}

