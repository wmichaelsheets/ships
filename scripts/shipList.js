import { getShippingShips } from "./database.js"


export const shippingShips = () => {
    const ships = getShippingShips()
    let shipsHTML = "<ul>"

    for (const ship of ships) {
        shipsHTML += `<li>${ship.name}</li>`
    }

    shipsHTML += "</ul>"

    return shipsHTML
}

// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const clickTarget = clickEvent.target
//         const walkerId = clickTarget.dataset.walkerforeignkey
      
//         const allWalkers = getWalkers()
//         for (const walker of allWalkers) {
//            if (walker.id === parseInt(walkerId)) {
//                 window.alert(`This pet is being walked by ${walker.name}`)
//            }
//         }

//         }
// )