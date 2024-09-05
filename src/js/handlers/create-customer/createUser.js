import HelperFetch from "../../helper/data-helper.js"
import { Spinner } from "../../view/loading-spinner.js"
import { Modal } from "../../view/modal.js"

// Defina a URL base
const BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? '/' : '/crud-frontend/'
const modal = new Modal()
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
    const helperFetch = new HelperFetch("http://localhost:3000")
    const token = localStorage.getItem("token")

    if (!token) {
      this.location.replace(BASE_URL+"src/pages/login.html")
    }

    helperFetch.addCustomer(dataObj, token).then((result) => {
      if (result == 201) {
        loading.destroy()
        modal.alert("Concluído","Cliente cadastrado com sucesso.", () => window.location.assign(BASE_URL))
      } else {
        loading.destroy()
        modal.alert("Algo deu errado","Não foi possível concluir a operação, tente novamente mais tarde. \n Erro: " + result, () => modal.close())
      }
    }).finally(() => loading.destroy())
  })
  document.querySelector("[data-back-page]").addEventListener("click", () => {
    window.location.assign(BASE_URL)
  })
})