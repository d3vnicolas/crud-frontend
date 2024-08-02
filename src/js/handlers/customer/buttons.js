const init = () => {
  EnableEdit()
}

const EnableEdit = () => {
  const inputList = document.querySelectorAll("[disabled]")
  const buttonEdit = document.querySelector("[type=button]")
  const buttonSave = document.querySelector("[type=submit]")

  buttonEdit.addEventListener("click", ({ target }) => {
    if (target.value == "edit") {
      inputList.forEach(input => {
        input.removeAttribute("disabled")
      })
      target.value = "cancel"
      target.innerText = "Cancelar"
      target.style.backgroundColor = "red"
      buttonSave.removeAttribute("style")
    } else {
      inputList.forEach(input => {
        input.setAttribute("disabled", true)
      })
      target.value = "edit"
      target.innerText = "Editar"
      target.style.backgroundColor = "#007BFF"
      buttonSave.style.display = "none"
    }
  })
}

export default { init }
