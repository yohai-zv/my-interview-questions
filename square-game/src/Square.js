import {useState} from 'react'
const Square = ()=>{

  const [count, setCount] = useState([]);


return <div 
onClick={(e)=>{
  setCount((prev)=>[...prev,'']);
  e.stopPropagation();
}}
style={{
  display: 'inline-block',
  padding: '10px',
  border:'5px solid',
  margin: '10px'
}}>
  <div style = {{display:'flex'}}>
  {count.map(()=><Square/>)}
  </div>
</div>
}

export default Square;