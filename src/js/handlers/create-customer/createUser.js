import HelperFetch from "../../helper/data-helper.js"

const form = document.querySelector("[data-form]")

form.addEventListener("submit", async e => {
  e.preventDefault()
  const dataObj = Array.from(e.target.querySelectorAll("input, select")).reduce((obj, field) => {
    obj[field.name] = field.value
    return obj
  }, {})
  
  try {
    const helperFetch = new HelperFetch("http://localhost:3000")
    helperFetch.addCustomer(dataObj).then(() => location.assign("/"))
    
  } catch (error) {
    console.log(error)    
  }
})