import React, { useEffect ,  useState} from 'react'
import UserList from './UserList'

function User() {
    const [users, setUsers] = useState([])
 useEffect(()=>{
    async function getPost (){
        const response = await fetch ('https://jsonplaceholder.typicode.com/photos?limit=10')
        const result = await response.json()
        setUsers(result.splice(0,10))
    }
    getPost()

 },[])
 console.log(users);
  return (
    <div className='container'>
        {users.map ((user)=>{
            return <UserList users ={user}/>
        })}
    </div>
  )
}

export default User
