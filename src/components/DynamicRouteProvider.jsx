import { useEffect } from 'react'


const DynamicRouteProvider = ({element:Element, title}) => {
    useEffect(()=>{
        document.title=title
    },[title])
    

  return <> {Element}</>
}


export default DynamicRouteProvider
