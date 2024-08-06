export class Table {
  renderIn
  customerList
  
  constructor(renderIn, customerList) {
    this.renderIn = renderIn, 
    this.customerList = customerList
  }

  /**
   * @param {String} renderIn Node selector to render table 
   * @param {Array} customerList Array of objects with data table
   */
  render () {
    let table = document.createElement("table")
    table.classList.add("main-table")

    const thead = document.createElement("thead")
    const tableHeaders = ["Nome", "E-mail", "Telefone", "Ações"]
    const tbodyElement = document.createElement("tbody")

    const trList = this.customerList.map((customer) => {
      const props = [customer.nome, customer.email, customer.telefone]
      let trElement = document.createElement("tr")
      props.forEach(prop => {
        let tdElement = document.createElement("td")
        tdElement.innerText = prop
        trElement.appendChild(tdElement)
      })

      trElement.appendChild(this.renderActionsButtons(customer.id))

      return trElement
    })

    tableHeaders.forEach(header => {
      let th = document.createElement("th")
      th.innerText = header
      thead.appendChild(th)
    })

    table.append(thead)
    trList.forEach((element) => {
      tbodyElement.appendChild(element)
    })
    table.appendChild(tbodyElement)
    document.querySelector(this.renderIn).appendChild(table)    
  }

  renderActionsButtons (id) {
    const seeLinkElement = document.createElement("a")
    seeLinkElement.setAttribute("href", "src/pages/customer.html")
    seeLinkElement.setAttribute("id", id)
    seeLinkElement.addEventListener("click", (e) => this.saveIdCustomerToShow(e))
    seeLinkElement.classList.add("icon-seemore")
    const seeLinkElementContent = document.createElement("span")
    seeLinkElementContent.innerText = "Ver"
    seeLinkElement.appendChild(seeLinkElementContent)

    const deletLinkElement = document.createElement("a")
    deletLinkElement.setAttribute("href", "javascript:void(0);")
    deletLinkElement.setAttribute("data-trigger", "delet:"+id)
    deletLinkElement.classList.add("icon-trash")
    const deletLinkElementContent = document.createElement("span")
    deletLinkElementContent.innerText = "Deletar"
    deletLinkElement.appendChild(deletLinkElementContent)

    const tdElement = document.createElement("td")
    tdElement.append(seeLinkElement, deletLinkElement)

    return tdElement
  }

  saveIdCustomerToShow ({ target }) {
    window.localStorage.setItem("customerToShow", target.id)
  }
}