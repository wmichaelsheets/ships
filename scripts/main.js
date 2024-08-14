import { dockList} from "./dockList.js"
import { Haulers } from "./haulerList.js"
import { shippingShips } from "./shipList.js"
//import { Assignments } from "./Assignments.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping Ship Tracker</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Hauling Ships</h2>
        ${Haulers()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Shipping Ships</h2>
        ${shippingShips()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Docks</h2>
        ${dockList()}             
    </section>
</article>`

//<article class="assignments">
//    <h2>Current Assignments</h2>
//    ${Assignments()}
//</article>
//`

mainContainer.innerHTML = applicationHTML

