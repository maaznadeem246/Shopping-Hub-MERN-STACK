import { USER_DETAILS_R_RECIEVED,USER_DETAILS_ERROR } from '../constants/constants'
import { api } from "./apiDetails"



const userTDeails = async (dispatch, token) => {
    
    try{
        const getTheUserData = await fetch(`${api}/profile`, { method: 'GET',headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }})

        const jsonData = await getTheUserData.json()
        
        if (jsonData.error) {
            console.log(jsonData)
            await dispatch({
                type: USER_DETAILS_ERROR,
                payload: jsonData.error
            })
        } else {
            await dispatch({
                type: USER_DETAILS_R_RECIEVED,
                payload: jsonData
            })
        }
  
    }catch(er){
        await console.log(er, "ss")
        //check later for this dispatch
        await dispatch({
            type: USER_DETAILS_ERROR,
            payload: `${er}`
        })
    }
}

export default userTDeails