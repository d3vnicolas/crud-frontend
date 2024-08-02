import { deletCustomer } from "../../helper/data-helper.js"

const init = () => {
  AddDeleteEvent()
}

const AddDeleteEvent = () => {
  const allButtons = document.querySelectorAll("[data-trigger]")
  allButtons.forEach(button => {
    const id = button.dataset.trigger.split(":")[1]
    button.addEventListener("click", async () => {
      const proceed = confirm(`Deseja realmente deletar este registro?`)
      if (proceed) {
        try {
          const response = await deletCustomer(`${window.apiUrl}/cliente/deletar/${id}`)
          console.log(response)
        } catch (error) {
          console.log("Erro: "+error)
        }
      }
    })
  })
}

export default { init }