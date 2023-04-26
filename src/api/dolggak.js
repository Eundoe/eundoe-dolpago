
export default function dolclick(x){
  let fors = Math.floor(Math.random() * 100 + 1)
  return (fors < x) ? "success" : "fail" 
}