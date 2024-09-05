import HelperFetch from "./helper/data-helper.js";
import { Modal } from "./view/modal.js";

document.addEventListener("DOMContentLoaded", async function () {
    const formLogin = document.querySelector('form[data-form-login]')
    const helper = new HelperFetch("http://localhost:3000")
    const modal = new Modal()

    formLogin.addEventListener('submit', async e => {
        e.preventDefault();
        const dataObj = Array.from(e.target.querySelectorAll("input")).reduce((obj, field) => {
            obj[field.name] = field.value
            return obj
        }, {})
        
        try {
            const result = await helper.doLogin(dataObj)

            if (result.token) {
                localStorage.setItem('token', result.token);
                this.location.replace("/")
            } else {
                console.log(result)
                modal.alert("Algo deu errado", result.message, () => modal.close())
            }
        } catch (error) {
            modal.alert(error)
        }
    })
});