import { Table } from "../../view/table.js"

const init = () => {
  search()
}

const search = () => {
  const buttonSearch = document.querySelector("button.btn-search")
  const input = document.querySelector("input[type=search]")
  const allUsers = JSON.parse(localStorage.getItem("allUsers"))

  buttonSearch.addEventListener("click", e => {
    e.preventDefault()
  })
}

export { init }
