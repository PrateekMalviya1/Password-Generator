import React, { useState } from 'react'
import './main.css'
export default function Main() {
    let [pass,setPass]=useState('')
    let upperAr=['ABCDEFGHIJKLMOPQRSTUVWXYZ'];
    let lowerAr=['abcdefghijklmnopqrstuvwxyz'];
    let symbolAr=['!@#$%^&*()-_+=|/.<>,'];
    let numAr=['1234567890']
    let generate=(event)=>{
        event.preventDefault();
        let inputLen=event.target.len.value;
        let finalPass=''
        let finalArray=[]
        if(event.target.upper.checked == true){
            finalArray += upperAr;
        }
        if(event.target.lower.checked == true){
            finalArray += lowerAr;
        }
        if(event.target.num.checked == true){
            finalArray += numAr;
        }
        if(event.target.sym.checked == true){
            finalArray += symbolAr;
        }
        for(let i = 0 ; i < inputLen ; i++){
            
            finalPass += finalArray.charAt(Math.floor(Math.random()*finalArray.length))
        }
        event.target.output.value=finalPass;
        setPass(finalPass)
    }
    let copyFun=()=>{
        navigator.clipboard.writeText(pass)
    }
    
  return (
    <div className='main'>
        <div className='inner-main'>
            <h2> Password Generater </h2>
            <form onSubmit={generate}>
                <div className='flex gap'>
                    <input type="text" name='output'/>
                    <div className='btn border' onClick={copyFun} name='copy'> copy </div>
                </div>
                <hr />
                <div className='input-btns'>
                    <div className='flex'>
                        Enter the length 
                        <div>
                            <input type="number" name='len' className='input-num' min={4} defaultValue={5} max={20} />
                        </div>
                    </div>
                    <div className='flex'>
                        Upper Case Latter
                        <input type="checkbox" name="upper" id=""  className='check'/>
                    </div>
                    <div className='flex'>
                        Lower Case Latter
                        <input type="checkbox" name="lower" id=""  className='check'/>
                    </div>
                    <div className='flex'>
                        Number
                        <input type="checkbox" defaultChecked={true} name="num" id=""  className='check'/>
                    </div>
                    <div className='flex'>
                        Symbols
                        <input type="checkbox" name="sym" id=""  className='check'/>
                    </div>
                    <div className='w'>
                        <button type='submit' className='submit'>
                            Generate
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
