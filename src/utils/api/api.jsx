


const getAllData = async (endpoint) => {
    const response = await fetch(endpoint)

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
}


export { getAllData }