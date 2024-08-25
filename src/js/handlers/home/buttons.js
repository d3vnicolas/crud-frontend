import HelperFetch from "../../helper/data-helper.js"
import { Modal } from "../../view/modal.js"

const modal = new Modal()
const init = () => {
  AddDeleteEvent()
}


const AddDeleteEvent = () => {
  const helperFetch = new HelperFetch(window.apiUrl)
  const allButtons = document.querySelectorAll("[data-trigger]")
  allButtons.forEach(button => {
    const id = button.dataset.trigger.split(":")[1]
    button.addEventListener("click", async () => {
      const proceed = await modal.confirm("", `Deseja realmente deletar este registro?`)
      if (proceed) {
        try {
          await helperFetch.deletCustomer(id)
        } catch (error) {
          modal.alert("Algo deu errado", "Erro: "+error, () => modal.close())
        }
      }
    })
  })
}

export default { init }