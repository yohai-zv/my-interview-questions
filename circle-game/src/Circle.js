import {useState} from 'react'
const Circle = ()=>{

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
  {count.map(()=><Circle/>)}
  </div>
</div>
}

export default Circle;