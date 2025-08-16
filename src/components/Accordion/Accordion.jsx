import React, { useState } from 'react'
import data from './data'
import './Accordion.css'

const Accordion = () => {
  const [show, setShow] = useState(null);
  const[enablemultiple,setEnableMultiple] =useState(false);
  const [multiple,setMultiple] =useState([]);
  const handleClick = (id) => {
    setShow(prev=> {
      return id === prev ? null : id
    })
  };

  const multipleSelection = (id) => {
    let copyMultiple = [...multiple];
    const findIndexOfId = copyMultiple.indexOf(id);
    
    if (findIndexOfId === -1) {
        copyMultiple.push(id)
    } else {
      copyMultiple.splice(findIndexOfId, 1)
    }
    setMultiple(copyMultiple);
  }
  return (
    <div className='accordion-container'>
      <div className="multiple" onClick={()=> setEnableMultiple(!enablemultiple)}>
        Enable Multiple Selection
      </div>
      {
        data && data.length >0 
        ?
        data.map((element) => {
          return <div 
          onClick={

            enablemultiple
            ?()=> multipleSelection(element.id)
            : ()=> handleClick(element.id)} className='query-box' key={element.id}>

            <div className="question-container" >
              <div className="question">{element.question}</div>
            <span>
              {
                show ===element.id ? '-' : '+'
              }
            </span>
            </div>
            {
              enablemultiple
              ? multiple.indexOf(element.id) !== -1 && (
                <div className="answer">{element.answer}</div>
              ):
              show === element.id
              ? <div className="answer">{element.answer}</div>
               : ""
            }
           
          </div>
        })
        :
        <div>No data availabale </div>
      }
    </div>
  )
}

export default Accordion