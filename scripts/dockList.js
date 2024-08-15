import { getDocks, getHaulingShips } from "./database.js"

export const dockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"
    
    for (const dock of docks) {
        docksHTML += `<li
                       data-id="${dock.id}"
                       data-type="dock"
                       >${dock.location}</li>`
        }

    docksHTML += "</ul>"

    return docksHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "dock" ) {
            const dockId = parseInt(itemClicked.dataset.id)
            const docks = getDocks()
            const haulers = getHaulingShips()

            const dock = docks.find(d=> d.id === dockId)
            const dockHaulers = haulers.filter(hauler => hauler.dockId === dockId)
            
            let message = `The ${dock.location} dock is currently unloading `

            if (dockHaulers.length === 0) {
                // No haulers at the dock
                message += `nothing`
            } else {
                // Join the hauler names with a comma if there are multiple haulers
                const haulerNames = dockHaulers.map(hauler => hauler.name).join(", ")
                message += haulerNames
            }

            // Display the message in an alert
            window.alert(message)

       //     window.alert(`The ${dock.location} is currently unloading ${haulers.name}`)
        }
        
    }

)