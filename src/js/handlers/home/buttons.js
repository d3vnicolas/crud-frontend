import HelperFetch from "../../helper/data-helper.js"
import { Modal } from "../../view/modal.js"

const modal = new Modal()
const init = () => {
  AddDeleteEvent()
}


const AddDeleteEvent = () => {
  const BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? '/' : '/crud-frontend/'
  const helperFetch = new HelperFetch(window.apiUrl)
  const allButtons = document.querySelectorAll("[data-trigger]")
  allButtons.forEach(button => {
    const id = button.dataset.trigger.split(":")[1]
    button.addEventListener("click", async () => {
      const proceed = await modal.confirm("", `Deseja realmente deletar este registro?`)
      if (proceed) {
        try {
          const token = localStorage.getItem("token")

          if (!token) {
            this.location.replace(BASE_URL+"src/pages/login.html")
          }

          await helperFetch.deletCustomer(id, token)
        } catch (error) {
          modal.alert("Algo deu errado", "Erro: "+error, () => modal.close())
        }
      }
    })
  })
}

export default { init }