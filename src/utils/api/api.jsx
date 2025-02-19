


const getAllData = async (endpoint) => {
    const response = await fetch(endpoint)

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.message}`)
    }
        return response.json()
}

const getVideoData = async (endpoint) => {
    const response = await fetch(endpoint)

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.message}`)
    }

    return response.json()
}
const getChannelData = async (endpoint) => {
    const response = await fetch(endpoint)

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.message}`)
    }

    return response.json()
}


export { getAllData, getVideoData, getChannelData }