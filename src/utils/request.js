import axios from 'axios';
const http = async (
    method,
    url,
    query) => {
    const config = {
        url,
        method
    }
    switch (method) {
        case 'GET':
            config.params = query
            break
        case 'POST':
            config.data = query
            break
        default:
            break
    }
    const requests = axios(config)
    let response
    try {
        response = await requests.data
        return response
    } catch (e) {
        console.log(e)
    }
}

const request = {
    get(url, query = {}) {
        return http('GET', url, query)
    },
    post(url, query) {
        return http('POST', url, query)
    },
    // params:obj
}
export default request
