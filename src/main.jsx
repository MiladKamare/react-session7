import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// let elem=<h1>سلام بر شما</h1>
// const tick=()=>{
// const elem=(<div>
//    <h1>hallo wilkommen</h1>
//    <h2>
//     it s {new Date().toLocaleTimeString()}
//    </h2>
// </div>
// )
// ReactDOM.createRoot(document.getElementById('root')).render(
//   elem
// )
// }
// setInterval(()=>{
//   tick();
// },1000)


const tick=()=>{

  const elem=(<div>
        <h1>Hello body</h1>
        <h2>
          it is {new Date().toLocaleTimeString()}
        </h2>
  </div>)
  ReactDOM.createRoot(document.getElementById('root')).render(elem);
}
setInterval(()=>{
  tick();
},1000)










