export default (state,action)=>{
    switch(action.type){
        case 'Remove':
            return{
                users: state.users.filter(user=>{
                    return(
                        user.id!==action.payload
                    )
                })
            }
        case 'Adduser':
            return{
                users:[...state.users,action.payload]
            }    
        case 'Edituser':
              const updateuser =action.payload
              const updateusers=state.users.map((user)=>{
                 if( user.id===updateuser.id){
                     return updateuser
                 }
                 return user
              })
              return{
                  users:updateusers
              }

        default:
            return state
    }
}