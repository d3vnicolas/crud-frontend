import ButtonsHandlers from "./handlers/customer/buttons.js"
import fillForm from "./handlers/customer/form.js"
import HelperFetch from "./helper/data-helper.js"

document.addEventListener("DOMContentLoaded", async function () {
  ButtonsHandlers.init()

  const helperFetch = new HelperFetch("https://crud-api-bg41.onrender.com")
  const id = JSON.parse(window.localStorage.getItem("customerToShow"))
  const BASE_URL = window.location.hostname === 'localhost' ? '/' : '/crud-frontend/'
  
  // Trazer os dados do cliente no formulário
  try {
    const customerToShow = await helperFetch.getUniqueCustomer(id)
    fillForm(customerToShow)

  } catch {
    alert("Erro ao localizar cliente.")
    window.location.assign(BASE_URL)
  }

  const form = document.querySelector("form")
  form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const fields = Array.from(form.querySelectorAll("input, select"))
    const dataObj = fields.reduce((obj, field) => {
      obj[field.name] = field.value
      return obj
    }, {})

    try {
      helperFetch.saveCustomer(dataObj, id).then(async () => {
        alert("Registro atualizado com sucesso.")
        window.location.reload()
      })
    } catch (error) {
      alert(error)
    }
  })
})
