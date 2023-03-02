export function updateDog (payload, id){
    console.log(payload);
    return async function(dispatch){
        await axios.put(`http://localhost:3001/dogs/${id}`, payload)
        return dispatch({
            type: 'UPDATE_DOG',
            payload: {
                payload,
                id
            }
        })
    }
}