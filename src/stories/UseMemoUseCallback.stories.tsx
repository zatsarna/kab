import React, {useCallback, useMemo, useState} from 'react';
export default {
    title: 'UseMemo'
}
export const DifficultCountingExample = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    let resultB = 1;
    const resultAsaved = useMemo(() => {
        let resultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 1
            while (fake < 100000) {
                fake++
                const fakeValue = Math.random()
            }
            resultA = resultA * i
        }
        return resultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <div>
            Result for A: {resultAsaved}
        </div>
        <div>
            Result for B: {resultB}
        </div>
    </>
}

//the second use-case for useMemo is to make React.memo work correctly
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users secret')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)
//Users is a container component, that check input props. If they changed, UsersSecret component get executed

export const UseMemoHelpsReactMemo = () => {
    console.log('Example2')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Olya', 'Liuda'])

    const newArray=useMemo(()=>{
        return users.filter(u =>u.toLowerCase().indexOf("a")>-1)
    },[users])

    const addUser=()=>{
        setUsers([...users, 'Sveta'+ new Date().getTime()])
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        {counter}
        <Users users={newArray}/>
        <button onClick={addUser}>add user</button>
    </>
}

export const UseMemoLooksLikeUseCallback = () => {
    console.log('UseMemoLooksLikeUseCallback')
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'JS', 'CSS'])

    const memoizedAddBook=useMemo(()=>{
        return ()=>{
            const newBooks=[...books, 'Angular'+ new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    const memoizedAddBook2=useCallback( ()=>{
            setBooks([...books, 'Angular'+ new Date().getTime()])
        }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        {counter}
        <Book  addBook={memoizedAddBook2}/>
    </>
}

const Book = React.memo((props: {  addBook: ()=>void }) => {
    console.log('books secret')
    return <div>
        <button onClick={props.addBook}>add book</button>
    </div>
})