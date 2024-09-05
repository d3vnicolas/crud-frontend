import { Modal } from "../view/modal.js"

const modal = new Modal()
const BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? '/' : '/crud-frontend/'
document.querySelector("[data-logout]").addEventListener("click", () => {
    try {
        localStorage.removeItem('token')
        modal.alert("", "Logout efetuado com sucesso", () => location.replace(BASE_URL+"src/pages/login.html"))
    } catch (error) {
        modal.alert("Algo deu errado", error, () => modal.close())
    }
})