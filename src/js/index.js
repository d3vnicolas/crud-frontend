import HelperFetch from "./helper/data-helper.js"
import { Table } from "./view/table.js"
import ButtonsHandlers from "./handlers/home/buttons.js"
import { init } from "./handlers/home/search.js"

window.apiUrl = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", async function () {
  try {
    const helperFetch = new HelperFetch(window.apiUrl)
    const allUsers = await helperFetch.getAllCustomers("/clientes")
    const mainTable = new Table("[data-table-main]", allUsers)
    mainTable.render()
    ButtonsHandlers.init()
    init()
  } catch (error) {
    console.error("Erro:", error)
  }
})