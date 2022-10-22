import axios from "axios"
// create a function that perfroms an axios request "POST", "GET", "PUT", "DELETE"
// it takes the url, the data and the headers as parameters

export const axiosRequest = async (
  method: string,
  url: string,
  data?: any,
  headers?: any
) => {
  try {
    const response = await axios({
      headers: headers,
      method: method,
      url: `${url}`,
      data,
    })
    console.group("AXIOS_RESPONSE")
    console.log("method: ", method)
    console.log("url: ", url)
    console.log("request data: ", response.data)
    console.log("headers: ", headers)
    console.log("response: ", response)
    console.groupEnd()
    return response?.data
  } catch (error) {
    console.group("AXIOS_REQUEST_ERROR")
    console.log("method: ", method)
    console.log("data: ", data)
    console.log("headers: ", headers)
    console.log("error: ", error)
    console.groupEnd()
    if (axios.isAxiosError(error)) {
      return error.message
    } else {
      console.log("UNEXPECTED ERROR: ", error)
      return "An unexpected error occurred"
    }
  }
}
