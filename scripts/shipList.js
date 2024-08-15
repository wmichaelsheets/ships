import { getShippingShips, getHaulingShips} from "./database.js"


export const shippingShips = () => {
    const ships = getShippingShips()
    let shipsHTML = "<ul>"

    for (const ship of ships) {
        shipsHTML += `<li 
                        data-type="shippingShip"
                        data-id=${ship.id} 
                        >${ship.name}</li>`
    }

    shipsHTML += "</ul>"

    return shipsHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        
             if (itemClicked.dataset.type ==="shippingShip") {

                const shipId = parseInt(itemClicked.dataset.id)
                const haulers = getHaulingShips()
                const shippingShip = getShippingShips().find(ship => ship.id === shipId)

                if (shippingShip) {
                    const hauler = haulers.find(hauler => hauler.id === shippingShip.haulerId)

                     if (hauler) {
        window.alert(
          `${shippingShip.name} is being hauled by ${hauler.name}`
        )
      } 
    }
  }
})