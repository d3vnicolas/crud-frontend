/**
 * 
 * @param {JSON} data Customer data json
 */
const fillForm = (data) => {
  const form = document.querySelector("form")
  const inputs = form.querySelectorAll("input[name], select[name]")
  
  inputs.forEach(input => {
    for (const key in data) {
      if (input.name == key) { input.value = data[key] }
    }
  })
}

export default fillForm