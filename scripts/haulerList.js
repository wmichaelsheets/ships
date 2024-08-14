import { getHaulingShips, getShippingShips} from "./database.js"      
import { shippingShips } from "./shipList.js"



export const Haulers = () => {
    const haulers = getHaulingShips()
    
    let haulerHTML = "<ul>"

    for (const hauler of haulers) {                                         
        haulerHTML += `<li 
                        data-type="hauler"
                        data-id=${hauler.id}
                        >${hauler.name}</li>`         
    }

    haulerHTML += "</ul>"

    return haulerHTML                      
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        
             if (itemClicked.dataset.type ==="hauler") {

                const haulerId = itemClicked.dataset.id

                let shipCounter = 0

                const shippingShips = getShippingShips()

                for (const ship of shippingShips) {
                    if(parseInt(haulerId) === ship.haulerId) {
                        shipCounter++
                    }
                }
             window.alert(`This is carrying ${shipCounter} shipping ships`)
         }

        
  })