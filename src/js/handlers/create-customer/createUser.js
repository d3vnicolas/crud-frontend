import HelperFetch from "../../helper/data-helper.js"
import { Spinner } from "../../view/loading-spinner.js"

// Defina a URL base
const BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? '/' : '/crud-frontend/'
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("[data-form]")

  form.addEventListener("submit", async e => {
    e.preventDefault()
    const dataObj = Array.from(e.target.querySelectorAll("input, select")).reduce((obj, field) => {
      obj[field.name] = field.value
      return obj
    }, {})

    const loading = new Spinner
    loading.show()
    const helperFetch = new HelperFetch("https://crud-api-bg41.onrender.com")
    helperFetch.addCustomer(dataObj).then((result) => {
      if (result == 201) {
        loading.destroy()
        alert("Cliente cadastrado com sucesso.")
        window.location.assign(BASE_URL)
      } else {
        loading.destroy()
        alert("Não foi possível concluir a operação, tente novamente mais tarde. \n Erro: " + result)
      }
    }).finally(() => loading.destroy())
  })
  document.querySelector("[data-back-page]").addEventListener("click", () => {
    window.location.assign(BASE_URL)
  })
})