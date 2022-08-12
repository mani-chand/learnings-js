const express = require(express)
app=express()
const redux=require('redux')
const reduxLogger=require('redux-logger')
const applyMiddleware=redux.applyMiddleware
const logger=reduxLogger.createLogger()
console.log(redux)
const createStore = redux.createStore 
const combineReducers=redux.combineReducers
const buy_Cake='buy_Cake'
const buy_IceCream='buy_IceCream'

function buyCake(){
    return{
            type:buy_Cake,
            info:'First redux action'
    }
}
function buyIceCream(){
    return{
            type:buy_IceCream,
            info:'First redux action'
    }
}
/*const intialState={
    numOfCakes:10,
    numOfIceCream:10
}
*/
const initialStateOfIceCream={
    numOfIceCream:20
}
const initialStateOfCakes={
    numOfCakes:10
}
/*
const reducer=(state=intialState,action)=>{
   switch(action.type){
    case buy_Cake:
        return {
            ...state, 
            numOfCakes:state.numOfCakes-1}
    case buy_IceCream:
        return {
            ...state, 
            numOfIceCream:state.numOfIceCream-1}
    default: return state
   }  
}*/
const iceCreamReducer=(state=initialStateOfIceCream,action)=>{
   switch(action.type){
    case buy_IceCream:
        return {
            ...state, 
            numOfIceCream:state.numOfIceCream-1}
    default: return state
   }  
}
const cakeReducer=(state=initialStateOfCakes,action)=>{
   switch(action.type){
    case buy_Cake:
        return {
            ...state, 
            numOfCakes:state.numOfCakes-1}
    default: return state
   }  
}
const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer

})
//const store=createStore(rootReducer,applyMiddleware(logger));
console.log(store.getState())
const unsubscribe=store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
unsubscribe()
const redux=require('redux')
//const {createStore}=redux
 const notes={
    note:[]
 }
 const myreduser=(state=notes,action)=>{
  switch (action.type){
    case 'add':{
        state.note=[...state.note,action.payload]
    }
  }
 }
 const store=createStore(myreduser)
 store.subscribe(()=>{
    console.log(notes)
 })
 const action={type:'add',payload:"react redux"}
 const action1={type:'add',payload:"MERN Stack"}
 const action2={type:'add',payload:"expressjs is a nodejs framework"}
 const action3={type:'add',payload:"react is a library not framework"}
 store.dispatch(action)
 store.dispatch(action1)
 store.dispatch(action2)
 store.dispatch(action3)














