
import {reducer, StateType, toggle_collapsed} from './Reducer';
test("reducer should toggle collapsed", ()=>{
    //data
    const state: StateType={collapsed: false}

    //action
    const endState=reducer(state, {type: toggle_collapsed})

    //expect
    expect(endState.collapsed).toBe(true)
})
test("expect to get an error when dispatch fake action type", ()=>{
    //data
    const state: StateType={collapsed: false}

    //action
   expect(()=>{reducer(state, {type: "fake"})}).toThrowError()



})