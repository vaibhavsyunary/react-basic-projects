import React, { useEffect, useState, useCallback, useRef } from 'react'

import "./Password.css"
const Password = () => {
  const [passLength, setPassLength] =useState(8);
  const [password, setPassword] = useState('');
  const [numberAllowed, setNumberAllowed] =useState(false)
  const [charAllowed, setCharAllowed] =useState(false)
  const passwordRef = useRef(null)
  useEffect(()=>{
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let characters ="<>,.?/~!@#$%^&*()}{|";
    let numbs ='1234567890'
    if (numberAllowed) {
      letters+= numbs;
    }

    if (charAllowed) {
      letters+= characters;
    }
    
    let pass = ''
    let arr = letters.split('');
    for (let i = 0; i < passLength; i++) {
         pass += arr[Math.floor(Math.random() * arr.length) ]
      
    }
    console.log(pass);
    setPassword(pass)
    

  }, [passLength, numberAllowed, charAllowed])


    const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <div className='password-container'>
      <div className="password-box">
        <input ref={passwordRef} className="password" readOnly value={password}/>
        <button onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div className="effects">
        <div className="range-box">
           <input
           id='length'
           min={8}
            max={16}
            type="range"
            value={passLength}
            onChange={(e)=> setPassLength(Number(e.target.value))}
             />
            <label htmlFor="length">Length ({passLength})</label>
            </div>
            <div className="number-box">
              <input checked={numberAllowed}  onChange={()=> setNumberAllowed(prev => !prev)}  id='number' type="checkbox" />
              <label htmlFor="number">Numbers</label>
            </div>
             <div className="char-box">
              <input checked={charAllowed}  onChange={()=> setCharAllowed(prev => !prev)} id='char' type="checkbox" />
              <label htmlFor="char">Characters</label>
            </div>

      </div>
       
    </div>
  )
}

export default Password