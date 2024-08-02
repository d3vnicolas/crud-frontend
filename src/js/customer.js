import ButtonsHandlers from "./handlers/customer/buttons.js"
import fillForm from "./handlers/customer/form.js"

document.addEventListener("DOMContentLoaded", function () {
  ButtonsHandlers.init()

  try {
    const id = JSON.parse(window.localStorage.getItem("customerToShow"))
    const customers = JSON.parse(window.localStorage.getItem("allUsers"))

    const customerToShow = customers.find(customer => customer.id == id)

    fillForm(customerToShow)
  } catch {
    alert("Erro ao localizar cliente.")
    this.location.assign("/")
  }
})
