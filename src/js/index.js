import HelperFetch from "./helper/data-helper.js"
import { Table } from "./view/table.js"
import ButtonsHandlers from "./handlers/home/buttons.js"

window.apiUrl = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", async function () {
  const mainTable = new Table("[data-table-main]", [])
  try {
    const helperFetch = new HelperFetch(window.apiUrl)
    const allUsers = await helperFetch.getAllCustomers("/clientes")
    window.localStorage.setItem("allUsers", JSON.stringify(allUsers.reverse()))
    mainTable.customerList = allUsers
    mainTable.render()
    ButtonsHandlers.init()
  } catch (error) {
    console.error("Erro:", error)
  }

  const formSearch = document.querySelector("form[data-search-form]")
  formSearch.addEventListener("submit", e => {
    e.preventDefault()
    const searchTerm = e.target.querySelector("input.search-bar").value
    
    if (!searchTerm.trim().length) {
      return
    }

    const users = JSON.parse(window.localStorage.getItem("allUsers"))
    const usersSearch = users.filter(user => user.nome.toLowerCase().includes(searchTerm))
    mainTable.customerList = usersSearch
    mainTable.render()
  })

  formSearch.querySelector("input.search-bar").addEventListener("input", ({ target }) => {
    if (target.value == "") { 
      mainTable.customerList = JSON.parse(window.localStorage.getItem("allUsers"))
      mainTable.render()
    }
  })
})