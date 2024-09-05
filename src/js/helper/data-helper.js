import { Modal } from "../view/modal.js"

const modal = new Modal()
const BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? '/' : '/crud-frontend/'

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
  getAllCustomers = async (token) => {
    try {
      // Envia uma solicitação GET para a URL fornecida
      const response = await fetch(this.apiUrl + "/admin/clientes", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-type": "application/json"
        }
      })

      if (response.status === 401) {
        location.replace(BASE_URL+"src/pages/login.html")
      }

      const result = await response.json()
      // Retorna os dados recebidos
      return result
    } catch (error) {
      // Captura e exibe qualquer erro que ocorra durante a solicitação
      modal.alert("Algo deu errado", error, () => {
        modal.close()
        location.replace(BASE_URL+"src/pages/login.html")
      })
    }
  }

  /**
   *
   * @param {Number} id Customer id to delete from database
   */
  deletCustomer = async (id, token) => {
    try {
      const response = await fetch(`${this.apiUrl}/admin/cliente/deletar/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })

      if (response.status === 401) {
        location.replace(BASE_URL+"src/pages/login.html")
      }

      modal.alert("Concluído", "Registro deletado com sucesso.", () => location.reload())
    } catch (error) {
      modal.alert("Algo deu errado", "Error delete data: " + error, () => modal.close())
    }
  }

  /**
   *
   * @param {JSON} data
   */
  saveCustomer = async (data, id, token) => {
    try {
      const response = await fetch(`${this.apiUrl}/admin/cliente/atualizar/${id}`, {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.status === 401) {
        location.replace(BASE_URL+"src/pages/login.html")
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
  getUniqueCustomer = async (id, token) => {
    try {
      const response = await fetch(`${this.apiUrl}/admin/cliente/${id}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })

      if (response.status === 401) {
        location.replace(BASE_URL+"src/pages/login.html")
      }

      // Converte a resposta para JSON
      const customer = await response.json()

      // Retorna os dados recebidos
      return customer
    } catch (error) {
      modal.alert("Algo deu errado", error, () => modal.close())
    }
  }

  addCustomer = async (data, token) => {
    try {
      const response = await fetch(`${this.apiUrl}/admin/cliente/registrar`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.status === 401) {
        location.replace(BASE_URL+"src/pages/login.html")
      }

      return response.status
    } catch (error) {
      modal.close("Algo deu errado", error, () => modal.close())
    }
  }

  doLogin = async data => {
    try {
      const response = await fetch(`${this.apiUrl}/login-admin`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      const result = await response.json()

      return result
    } catch (error) {
      modal.close("Algo deu errado", error, () => modal.close())
    }
  }
}

export default HelperFetch
