import React, {useEffect, useState} from 'react';
export default {
    title: 'useEffect demo'
}

export const ExampleUseEffect = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);
//function inside useEffect gets executed only after JSX was displayed on the page

    //function inside UseEffect gets executed after every component rerender
    useEffect(()=>{
        console.log('UseEffect after every component rerender')
        document.title=counter.toString()
        //side effects in React
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementById
        //document.title='user'
    })
    //function inside UseEffect gets executed once after first component render and then only when dependency was changed
    useEffect(()=>{
        console.log('UseEffect first render and at every counter change')
        document.title=counter.toString()
    },[counter])

    //function inside UseEffect gets executed only 1 time after first component render
    useEffect(()=>{
        console.log('UseEffect only first render. Equal to Component did mount')
        document.title=counter.toString()
    },[])

    return <>
        counter: {counter}
        fake: {fake}
        <button onClick={() => setCounter(counter+1)}>counter+1</button>
        <button onClick={() => setFake(fake+1)}>fake+1</button>
    </>
}

export const SetIntervalExampleUseEffect = () => {
    console.log('SetTimeout Example')
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);
//function inside useEffect gets executed only after JSX was displayed on the page


    useEffect(()=>{
        console.log('SetTimeout')
        //execute function inside SetTimeout in 1 second
        //setTimeout(()=>{document.title=counter.toString()}, 1000)

        //execute function inside SetInterval every 1 second
        setInterval(()=>{setCounter(state =>state+1)}, 1000)
    },[])


    return <>
        counter: {counter}
        fake: {fake}
        {/*<button onClick={() => setCounter(counter+1)}>counter+1</button>
        <button onClick={() => setFake(fake+1)}>fake+1</button>*/}
    </>
}

export const ResetEffect = () => {
    const [counter, setCounter] = useState(1);
    console.log('Component rendered' + counter)

    useEffect(()=>{
        console.log(`useEffect ${counter}`)
//function below will execute when component dies or before function inside useEffect will be re-rendered
        return ()=>console.log('reset effect' + counter)
    },[counter])


    return <>
        counter: {counter}
       <button onClick={()=>setCounter(counter+1)}>Add1</button>
    </>
}

export const KeysTracker1 = () => {
    const [text, setText] = useState('');
    console.log('Component rendered' + text)

    useEffect(()=>{
        const keysListener=(e: KeyboardEvent)=>{
            setText((t)=>t+e.key)
        }
    window.addEventListener('keypress', keysListener)
        return ()=>{
        window.removeEventListener('keypress', keysListener)
        }
    },[])

    return <>Text: {text}</>
}
export const KeysTracker2 = () => {
    const [text, setText] = useState('');
    console.log('Component rendered' + text)

    useEffect(()=>{
        const keysListener=(e: KeyboardEvent)=>{
            setText(text+e.key)
        }
        window.addEventListener('keypress', keysListener)
        return ()=>{
            window.removeEventListener('keypress', keysListener)
        }
    },[text])

    return <>Text: {text}</>
}
export const SetTimeoutExampleUseEffect = () => {
    console.log('SetTimeout Example')
    const [text, setText] = useState('');

    useEffect(()=>{
        console.log('SetTimeout')
        //execute function inside SetTimeout in 1 second
        const id=setTimeout(()=>{setText(text+'3seconds ')}, 3000)

        return ()=>{clearTimeout(id)}
    },[text])

    return <>text: {text}</>
}
