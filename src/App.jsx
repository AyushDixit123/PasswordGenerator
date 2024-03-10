import { useEffect } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'


function App() {
  const [length,setLength]=useState(8)
  const [num,setNum]=useState(false)
  const [char,setChar]=useState(false)
  const [password, setPassword]=useState('')
  const passwordGenerator= useCallback(()=>{
    let pass=''
    let str='QWERTYUIOPASDFGHJKLZXCVBNMmnbvcxzlkjhgfdsapoiuytrewq'
    if(num) str+="0123456789"
    if(char) str+="!@#$%^&*"
    for(let i=0;i< length;i++){
      let charind=Math.floor(Math.random()*str.length+1)
      pass +=str.charAt(charind)
    }setPassword(pass)
  },[length,num,char])
  useEffect(()=>{passwordGenerator()},[length,num,passwordGenerator])
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };
  return (
    <>
      <div className='w-full max-w-md mx-auto text-orange bg-gray-700 px-4 my-8 '>
        <div className='text-center text-orange-600'>Password Generator</div>
       <div className='flex shadow rounded-lg overflow-hidden mb-4 my-3'>
        <input type="text" value={password} className=' outline-none w-full  py-1 px-3' placeholder='password' readOnly />
        <button className='bg-blue-400 text-#000 px-3 py-0.5' onClick={handleCopy}>copy</button></div> 
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={(8)} max= {20} value={length} onChange={(e)=>{
              setLength(e.target.value)
            }} className='cursor-pointer '/> <label className='text-orange-600' >length:{length}</label>
            <input type="checkbox" defaultChecked={num}  onChange={()=>{
              setNum((prev) => !prev);
            }}  /><label className ='text-orange-600'>number</label>
            <input type="checkbox" defaultChecked={num} onChange={()=>{
              setChar((prev) => !prev);
            }}  /><label className='text-orange-600'>characters</label></div></div></div>=

    </>
  )
}

export default App
