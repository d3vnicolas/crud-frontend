import ButtonsHandlers from "./handlers/customer/buttons.js"
import fillForm from "./handlers/customer/form.js"
import HelperFetch from "./helper/data-helper.js"
import { Spinner } from "./view/loading-spinner.js"
import { Modal } from "./view/modal.js"

document.addEventListener("DOMContentLoaded", async function () {
  ButtonsHandlers.init()

  const helperFetch = new HelperFetch("https://crud-api-bg41.onrender.com")
  const id = JSON.parse(window.localStorage.getItem("customerToShow"))
  const BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? '/' : '/crud-frontend/'
  const modal = new Modal()
  
  // Trazer os dados do cliente no formulário
  try {
    const loading = new Spinner
    loading.show()
    const customerToShow = await helperFetch.getUniqueCustomer(id).finally(() => loading.destroy())
    fillForm(customerToShow)

  } catch {
    modal.alert("Algo deu errado","Erro ao localizar cliente.", () => modal.close())
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
      helperFetch.saveCustomer(dataObj, id).then(async (response) => {
        if (response == 200) {
          modal.alert("Concluído","Usuário atualizado com sucesso.", () => window.location.reload())
        } else {
          modal.alert("Algo deu errado","Não foi possível concluir a operação, tente novamente mais tarde. \n Erro: "+response, () => modal.close())
        }
      })
    } catch (error) {
      modal.alert("Algo deu errado", error, () => modal.close())
    }
  })

  document.querySelector("[data-back-page]").addEventListener("click", () => {
    window.location.assign(BASE_URL)
  })
})
