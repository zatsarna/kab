import React, {useState} from 'react';

export default {
    title: "React.memo demo"
}
const NewMessageCounter=(props: {count: number})=>{
    return <div>{props.count}</div>
}
const UsersSecret=(props: {users: Array<string>})=>{
    console.log("users")
    return <div>
        {props.users.map((u,i)=><div key={i}>{u}</div>)}
    </div>
}
const Users=React.memo(UsersSecret)
//Users is a container component, that check input props. If they changed, UsersSecret component get executed
export const Example1=()=>{
    console.log('Example1')
    const [counter, setCounter]=useState(0);
    const [users, setUsers]=useState(["Olya", "Liuda"])
    const addUser=()=>{
        setUsers([...users, 'Sveta'+ new Date().getDate()])
    }
    return <>
        <button onClick={()=>setCounter(counter+1)}>+1</button>
        <NewMessageCounter count={counter}/>
        <button onClick={addUser}>add user</button>
        <Users users={users}/>
    </>
}