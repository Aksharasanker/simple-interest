
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
       const [principle,setPrinciple]=useState(0)
       const [rate,setRate]=useState(0)
       const [year,setYear]=useState(0)
       const [interest,setInterest]=useState(0)

       //conditionally render
       const [isPrinciple,setIsprinciple]=useState(true)
       const [isRate,setIsRate]=useState(true)
       const [isYear,setIsYear]=useState(true)
       const validate=(e)=>{
          const {name , value}= e.target
          console.log(name);
          console.log(value);
          //regular
          
         if((!!value.match(/^[0-9]*$/))){
          if(name=='principle'){
            setPrinciple(value)
            setIsprinciple(true)
          }
          else if(name=='rate'){
            setRate(value)
            setIsRate(true)
          }
          else{
            setYear(value)
            setIsYear(true)
          }

         }else{
          if(name=='principle'){
            setPrinciple(value)
            setIsprinciple(false)
          }
          else if(name=='rate'){
            setRate(value)
            setIsRate(false)
          
          }
          else{
            setYear(value)
            setIsYear(false)
          }
         }


       }

//function to handle reset


const handleReset=()=>{
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setIsprinciple(true)
  setIsRate(true)
  setIsYear(true)
  setInterest(0)
          
}

//function to calculate handleCalculate 
const handleCalculate=()=>{
  setInterest((principle*rate*year)/100)

}
  return (
  <>
    
    <div className ='main'>
    <div className='sub p-5'>
      <h1>Simple interest App</h1>
      <p>Calculate your simple interest easily</p>


      <div className='w-100 d-flex justify-content-center align-items-center result rounded mt-5 shadow flex-column'>
      <p>Total Simple interest</p>
      <h1>₹ {interest}</h1>
      </div>

      <form action="" className='mt-5'>
        <TextField id="outlined-basic" name='principle' value={principle ||""}label="₹ principal amount" variant="outlined" className='w-100 ' onChange={(e)=>validate(e)}/>
        {!isPrinciple&& <p className='text-danger'>Invalid input</p>}
        
        <TextField id="outlined-basic" name='rate' value={rate||"" } label="rate of interest (p.a) %" variant="outlined" className='w-100 mt-3'onChange={(e)=>validate(e)}/>
        {!isRate && <p className='text-danger'>Invalid input</p>}
        <TextField id="outlined-basic" name='year (yr)' value={year||"" } label="Number of year" variant="outlined" className='w-100 mt-3'onChange={(e)=>validate(e)}/>
        {!isYear &&<p className='text-danger'>Invalid input</p>}
        
        
         <div className='d-flex mt-4 '>
          <Button onClick={handleCalculate}className='w-50 p-3 me-3' variant="contained" color="success" disabled={isPrinciple && isRate && isYear?false:true}>Calculate</Button>
          <Button onClick={handleReset} className='w-50 p-3'variant="outlined" color="primary">Reset</Button>
         </div>


        </form>
    </div>
  </div>
  
  
  
  
  </>


  )
  
}

export default App
