import { Modal } from "../view/modal.js"

const modal = new Modal()

class HelperFetch {
  apiUrl

  /**
   *
   * @param {URL} url Base API URL
   */
  constructor(url) {
    this.apiUrl = url
  }

  /**
   * 
   * @returns Data json
   */
  getAllCustomers = async () => {
    try {
      // Envia uma solicitação GET para a URL fornecida
      const response = await fetch(this.apiUrl + "/clientes")

      // Verifica se a resposta foi bem-sucedida (status 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`)
      }

      // Converte a resposta para JSON
      const data = await response.json()

      // Retorna os dados recebidos
      return data
    } catch (error) {
      // Captura e exibe qualquer erro que ocorra durante a solicitação
      modal.alert("Algo deu errado", "Error fetching data: "+error, () => modal.close())
    }
  }

  /**
   *
   * @param {Number} id Customer id to delete from database
   */
  deletCustomer = async id => {
    try {
      const response = await fetch(`${this.apiUrl}/cliente/deletar/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`)
      }

      modal.alert("Concluído","Registro deletado com sucesso.", () => location.reload())
    } catch (error) {
      modal.alert("Algo deu errado","Error delete data: "+error, () => modal.close())
    }
  }

  /**
   *
   * @param {JSON} data
   */
  saveCustomer = async (data, id) => {
    try {
      const response = await fetch(`${this.apiUrl}/cliente/atualizar/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`)
      }

      return response.status
    } catch (error) {
      return `HTTP error status: ${error}`
    }
  }

  /**
   * 
   * @param {Number} id Customer id to find in database
   * @returns 
   */
  getUniqueCustomer = async id => {
    try {
      const response = await fetch(`${this.apiUrl}/cliente/${id}`)

      // Verifica se a resposta foi bem-sucedida (status 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`)
      }

      // Converte a resposta para JSON
      const customer = await response.json()

      // Retorna os dados recebidos
      return customer
    } catch (error) {
      modal.alert("Algo deu errado", error, () => modal.close())
    }
  }

  addCustomer = async data => {
    try {
      const response = await fetch(`${this.apiUrl}/cliente/registrar`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`)
      }

      return response.status
    } catch (error) {
      modal.close("Algo deu errado", error, () => modal.close())
    }
  }
}

export default HelperFetch
