
import { useState } from "react"
import dolclick from "./api/dolggak"
import Dolline from "./part/Dolline"
import bdata from './data/data.json'
import './App.css'

function App(){
  const [percent, setPercent] = useState(bdata.firstpercent)
  const [rare,setRare] = useState(bdata.rare[0].value)
  const dol = ["merit","merit","demerit"]

  function fckingstone(e){
    e.preventDefault();
    if (document.querySelectorAll('ul.' + e.target.getAttribute('name') + ">li[name='none']").length < 1){
      return false
    }
    else{
      const singledol = document.querySelector('ul.' + e.target.getAttribute('name') + ">li[name='none']")
      let result = dolclick(percent)
      if (result === "success"){
        (percent === 25) ? setPercent(25) : setPercent(percent - 10)
        singledol.style.backgroundColor = (singledol.classList.contains("merit")) ? "blue" : "red"

      }
      else{
        ((percent === 75) ? setPercent(75) : setPercent(percent + 10))
        singledol.style.backgroundColor = "grey"
      }
      singledol.setAttribute('name',result)
      
    }
  }

  function changeOption(e){
    let reseton = document.querySelectorAll("ul>li[name]")
    for (let i of reseton){
      i.setAttribute('name','none')
      i.style.backgroundColor = "white"
    }
    setPercent(bdata.firstpercent)
    setRare(e.target.value)
  }



  return(
    <div id="wrap">
      <h1>dolpago ver 001</h1>
      <p>현재확률 : {percent}</p>
      <form className="option">
        
        <select onChange={(e) => {changeOption(e)}}>
          {
            bdata.rare.map((item,idx) => {
              return(
                <option value={item.value} key={idx} >{item.name}</option>
              )
            })
          }
        </select>
      </form>
      <div className="dolbox">
        <div>
          {dol.map((item,idx) => {
            return (
              <button name={item + idx} key={idx} onClick={(e)=>{fckingstone(e)}}>{(item === "merit") ? "증가능력" : "감소능력"}</button>
            )
          })}
        </div>
       <div className="maindol">
        {dol.map((item,index) => {
          return (
            <ul className={ item + index} key={index}>
              <Dolline rare = {rare} cname = {item}/>
            </ul>
          )
        })}
       </div>
      </div>
    </div>

    
  )
}


export default App