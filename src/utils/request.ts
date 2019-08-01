// import axios from 'axios';
// const http = async (
//     method: 'GET' | 'POST',
//     url: string,
//     query: GetQuery | PostQuery | FormData | string,
//     errorMessage?: string,
//     successMessage?: string) => {
//     const config: ApiConfig = {
//         url,
//         method
//     }
//     switch (method) {
//         case 'GET':
//             config.params = query
//             break
//     }
//     const requests = axios(config)
//     let response
//     try {
//         response = await requests.data
//         return response
//     } catch (e) {
//         console.log(e)
//     }
// }

// const request: ApiConstructor = {
//     get(url, query = {}, errorMessage = '错误') {
//         return http('GET', url, query, errorMessage)
//     },
//     post(url, query, errorMessage = '错误', successMessage = '成功') {
//         return http('POST', url, query, errorMessage, successMessage)
//     },
//     // params:obj
// }
// export default request

// interface GetQuery {
//     [key: string]: string | boolean | number
// }
// interface PostQuery {
//     [key: string]: any
// }
// interface Dictonary<T> {
//     [key: string]: T
// }
// interface RequestHeaders {
//     Authorization: string
// }
// interface ApiConfig {
//     url: string,
//     params?: GetQuery | PostQuery | string,
//     data?: PostQuery | GetQuery | string,
//     method: 'GET' | 'POST' | 'EXPORT',
//     // withCredentials: boolean,
//     // headers: RequestHeaders
// }
// interface ApiReslut {
//     code: number,
//     message?: string,
//     body: any | null,
//     [key: string]: any
// }
// type ApiPromise = Promise<ApiReslut>
// interface ApiConstructor {
//     get(url: string, query?: GetQuery, errorMessage?: string): ApiPromise,
//     post(url: string, query: PostQuery, errorMessage?: string, successMessage?: string): ApiPromise,
//     // params(obj: Dictonary<string>): string
// }