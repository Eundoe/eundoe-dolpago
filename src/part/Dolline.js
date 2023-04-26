


function Dolline({rare, cname}){
  let dolarray = []
  for(let i = 1; i <= rare; i ++){
    dolarray.push(i)
  }
  return dolarray.map((item,idx) => {
    return <li className={cname} key={idx} name="none">{item}</li>
  } )
}


export default Dolline