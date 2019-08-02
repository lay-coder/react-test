import request from 'utils/request.js'
const test = () => {
    return request.get('/api/test')
}

const getAreaList = () => {
    return request.get('/ipa/common/area-list')
}
export {
    test,
    getAreaList
}