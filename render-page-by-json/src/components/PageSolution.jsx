import { useState } from "react"



const Title = ({value, style,description, children})=>{
  return <>
  <h1 style = {style}>{value}</h1>
  {description && <h3>{description}</h3>}
  <div>
    <ContentBlocks blocks={children}></ContentBlocks>
  </div>
  </>
}
const Section = ({value, style, children})=>{
  return <p style = {{fontSize:'18px', ...style}} >
    {value}
    <>
    <ContentBlocks blocks={children}></ContentBlocks>
    </>
  </p>
}

const Anchor = ({value, href, style})=>{
  return <a style = {style} href={href}>
    {value}
  </a>
}

const Photo = ({ style, description,src,tooltip, children})=>{
  
  return <>
  <img style ={{width:'100%', ...style}} src={src} title={tooltip} alt={description}/>
  {description && <div>{description}</div>}
  <div>
    <ContentBlocks blocks={children}></ContentBlocks>
  </div>
  </>
}

const Tab = ({ value, style, children }) => {
  const [isOpen, toggle] = useState(false);

  return <div style ={style}>
    <button type="button" style={{width:'100%', cursor:'pointer', border:'none', outline: 'none', textAlign: 'left'}} onClick={() => toggle(isOpen => !isOpen)}>{value}</button>
    {isOpen && <div style = {{padding:'20px'}}>
      <ContentBlocks blocks={children}></ContentBlocks>
    </div>}
  </div>
}

const ContentBlock = ({contentBlock})=>{
  switch(contentBlock.type){
    case 'title':{
      return <Title {...contentBlock}/>
    }
    case 'section':{
      return <Section {...contentBlock}/>
    }
    case 'anchor':{
      return <Anchor {...contentBlock}/>
    }
    case 'photo':{
      return <Photo {...contentBlock}/>
    }
    case 'tab': {
      return <Tab {...contentBlock} />
    }
    default:{
      return null
    }
  }
}


const ContentBlocks = ({blocks=[]})=>{
  
  return blocks.map(block=><ContentBlock contentBlock={block}/>)
}

const Page = ({content=[]})=>{
  
  return <div style={{width:"720px", margin: '0 auto'}}><ContentBlocks blocks={content}/></div>
}

export default Page;