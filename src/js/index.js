import { getAllCustomers } from "./helper/data-helper.js"
import { Table } from "./view/table.js"
import ButtonsHandlers from "./handlers/home/buttons.js"

// window.apiUrl = "https://crud-api-bg41.onrender.com"
window.apiUrl = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", async function () {
  try {
    const allUsers = await getAllCustomers(window.apiUrl+"/clientes")
    const mainTable = new Table("[data-table-main]", allUsers)
    mainTable.render()
    ButtonsHandlers.init()
  } catch (error) {
    console.error("Erro:", error)
  }
})