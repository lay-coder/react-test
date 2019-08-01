import request from 'utils/request.js'
const test = () => {
    return request.get('/api/test')
}

export default {
    test
}