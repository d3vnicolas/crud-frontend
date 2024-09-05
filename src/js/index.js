import HelperFetch from "./helper/data-helper.js"
import { Table } from "./view/table.js"
import ButtonsHandlers from "./handlers/home/buttons.js"
import { Spinner } from "./view/loading-spinner.js"
import { Modal } from "./view/modal.js"

window.apiUrl = "http://localhost:3000"
const modal = new Modal()
const loading = new Spinner

document.addEventListener("DOMContentLoaded", async function () {
  const BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? '/' : '/crud-frontend/'
  const mainTable = new Table("[data-table-main]", [])
  try {
    loading.show()
    const helperFetch = new HelperFetch(window.apiUrl)
    const token = localStorage.getItem("token")

    if (!token) {
      this.location.replace(BASE_URL+"src/pages/login.html")
    }
    
    const allUsers = await helperFetch.getAllCustomers(token).finally(() => loading.destroy())
    
    window.localStorage.setItem("allUsers", JSON.stringify(allUsers.reverse()))
    mainTable.customerList = allUsers
    mainTable.render()
    ButtonsHandlers.init()
  } catch (error) {
    modal.alert("Algo deu errado", error, () => modal.close())
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
    ButtonsHandlers.init()
  })

  formSearch.querySelector("input.search-bar").addEventListener("input", ({ target }) => {
    if (target.value == "") { 
      mainTable.customerList = JSON.parse(window.localStorage.getItem("allUsers"))
      mainTable.render()
      ButtonsHandlers.init()
    }
  })
})