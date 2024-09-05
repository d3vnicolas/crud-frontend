import { Modal } from "../view/modal.js"

const modal = new Modal()
document.querySelector("[data-logout]").addEventListener("click", () => {
    try {
        localStorage.removeItem('token')
        modal.alert("", "Logout efetuado com sucesso", () => location.replace("/src/pages/login.html"))
    } catch (error) {
        modal.alert("Algo deu errado", error, () => modal.close())
    }
})