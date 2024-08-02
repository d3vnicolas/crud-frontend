const getAllCustomers = async url => {
  try {
    // Envia uma solicitação GET para a URL fornecida
    const response = await fetch(url)
    
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
    console.error('Error fetching data:', error)
  }
}

const deletCustomer = async url => {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`)
    }

    alert("Registro deletado com sucesso.")
    location.reload()
  } catch (error) {
    console.error('Error delete data:', error)
  }
}

export { getAllCustomers, deletCustomer }