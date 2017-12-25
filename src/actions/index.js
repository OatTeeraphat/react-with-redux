export function receiveApi() {
   return {
       type : 'FETCH_SUCCESS'
    }
}

export function focusPerson(id) {
    return {
        type : 'SELECT_PERSON',
        id : id
     }
 }