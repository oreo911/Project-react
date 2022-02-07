import axios from 'axios';

export const GET_USER_LIST = "GET_USER_LIST";
export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const POST_USER_CREATE = "POST_USER_CREATE";



export const getUsersList = () => {
    return(dispatch) => {
        axios
        .get("https://my-json-server.typicode.com/Firdaus54/react-api/users/")
        .then(function (response) {
            //Handle Success
            dispatch({
                type: GET_USER_LIST,
                payload: {
                    data: response.data,
                    errorMessage: false,
                }
            })
        })
        .catch(function (eror) {
            //Handle Error
            dispatch({
                type: GET_USER_LIST,
                payload: {
                    data: false,
                    errorMessage: eror.message,
                }
            })
        })
        //.then(function () {
          // Always Executed  
        //}) 
    };
} ;

export const deleteUser = (id) => {
    return(dispatch) => {
        axios
        .delete("https://my-json-server.typicode.com/Firdaus54/react-api/users/" +id)
        .then(function (response) {
           
        })
        .catch(function (eror) {
          
        })
        //.then(function () {
          // Always Executed  
        //}) 
    };
} ;

export const deleteDataUser = () => {
    return (dispatch) => {
      dispatch({
        type: GET_USER_DETAIL,
        payload: {
          data: false,
          errorMessage: false,
        },
      });
  
  
      dispatch({
        type: POST_USER_CREATE,
        payload: {
          data: false,
          errorMessage: false,
        },
      });
    };
  };