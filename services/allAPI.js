import commonAPI from "./commonAPI"
import SERVERURL from './serverURL'

// saveDataAPI - post
export const saveDataAPI = async (gameDetails) =>{
   return await commonAPI("POST",`${SERVERURL}/uploadData`,gameDetails)
}

// getDataAPI - get
export const getDataAPI = async () =>{
    return await commonAPI("GET",`${SERVERURL}/uploadData`,"")
 }

// removeDataAPI - get
export const removeDataAPI = async (id) =>{
   return await commonAPI("DELETE",`${SERVERURL}/uploadData/${id}`,{})
}
