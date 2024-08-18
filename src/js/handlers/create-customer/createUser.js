import HelperFetch from "../../helper/data-helper.js"

// Defina a URL base
const BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? '/' : '/crud-frontend/'

const form = document.querySelector("[data-form]")
document.addEventListener("DOMContentLoaded", async function () {
  form.addEventListener("submit", async e => {
    e.preventDefault()
    const dataObj = Array.from(e.target.querySelectorAll("input, select")).reduce((obj, field) => {
      obj[field.name] = field.value
      return obj
    }, {})
    
    const helperFetch = new HelperFetch("https://crud-api-bg41.onrender.com")
    helperFetch.addCustomer(dataObj).then(() => {
      alert("Cliente cadastrado com sucesso.")
      window.location.assign(BASE_URL)
    })
  })
  
  document.querySelector("[data-back-page]").addEventListener("click", () => {
    window.location.assign(BASE_URL)
  })
}
