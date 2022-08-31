import type { NextPage } from 'next'
import { useState } from 'react';
import CurrentDate from '../components/CurrentDate'
import { FaRegEdit } from "react-icons/fa";

const Home: NextPage = () => {
  const [openInput, setOpenInput] = useState(false); 
  const [userInput, setUserInput] = useState(''); 
  const [userInputChange, setuserInputChange] = useState(''); 
  const [editTodo, setEditTodo] = useState<string | boolean>(false); 
  const [todoList, setTodoList] = useState<string[]>([]); 

  const handleInput = () => {
    setOpenInput(openInput ? false : true);
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (userInput) {
      setTodoList([userInput, ...todoList]);
      setUserInput('')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setUserInput(e.target.value);
  }

  const handleDelete= (todo: string) => {

    const updateArr = todoList.filter((item) => item !== todo)

    setTodoList(updateArr)
  }

  const handleEdit= (todo: string) => {
    setEditTodo(todo)
    setuserInputChange(todo);
  }

  const changeValueTodo = (todo: string, text: string) => {
    const updateArr = todoList.map((elem, index) => {
            if(elem === todo) {
              elem  = text 
            } 
            return elem;
          })
          setTodoList(updateArr);
          setEditTodo(false);
  }


  return (
    <>
    <div className='block w-[500px] min-h-[60%] pb-[15px] bg-white rounded-3xl my-0 m-auto z-[1]'>
      <div className='flex justify-between mt-[10px] w-[80%] m-auto'>
    <CurrentDate />
    <button onClick = {handleInput} className=' relative text-lg bg-white border-[3px] border-solid border-[#B864F7] rounded-[100%] w-[60px] h-[60px]'>
      <span className='absolute w-[24px] h-[3px] left-[50%] translate-x-[-50%] rotate-90  z-1 bg-stone-900 border-1 border-solid border-black'></span>
      <span className='absolute w-[24px] h-[3px] left-[50%] translate-x-[-50%] rotate-180 z-2 bg-stone-900 border-1 border-solid border-black'></span>
      </button>
      </div>
    {openInput && <form className='block text-center mt-[20px] w-[80%] m-auto mb-[25px]'> <input className='w-[78%] h-[38px] border-[2px] border-solid border-[#B864F7] rounded-[7px] pl-[5px] pr-[5px]' type="text" placeholder='Type your task' value={userInput}  onChange={handleChange} /> 
                          <button type='submit' onClick={handleClick} className='w-[20%] h-[38px] rounded-[7px] text-white border-[2px] border-solid bg-[#B864F7] ml-[5px] hover:bg-white hover:text-[#B864F7] hover:border-[2px] hover:border-[#B864F7]'>Send</button> 
                    </form>}
                    
    <ul>
      {todoList.length >= 1 && todoList.map((item, index) => { 
        return  (
              (editTodo === item) ? (
                <>
                  <div className='flex w-[80%] mx-auto justify-between items-center border-[2px] border-solid border-[#B7B7B7] rounded-[10px] pl-[10px] pr-[10px] mt-[10px]'>
                  <textarea  className='w-[80%] h-[70px] focus:outline-none resize-none' value={userInputChange} onChange={(e) => {setuserInputChange(e.target.value)}} /> 
                  <button className='w-[60px] h-[35px] rounded-[7px] text-white border-[2px] border-solid bg-[#B864F7] ml-[5px] hover:bg-white hover:text-[#B864F7] hover:border-[2px] hover:border-[#B864F7]' onClick={(e) => changeValueTodo(item, userInputChange)}>Editer</button>
                  </div>
                    </>
                  ) : (
                    <>
                    <div className='flex max-w-[80%] mx-auto justify-between items-center border-[2px] border-solid border-[#B7B7B7] rounded-[10px] pl-[10px] pr-[10px] mt-[10px]'>
                    <li key={index} className='w-[75%]  text-[20px]'>
                      <p className='max-w-[80%] break-words '>{item}</p>
                    </li>
                      <div className='flex justify-between items-center w-[25%]'>
                        <button className='w-[80px] h-[40px] rounded-[7px] text-white border-[2px] border-solid bg-[#B864F7] ml-[5px] hover:bg-white hover:text-[#B864F7] hover:border-[2px] hover:border-[#B864F7]' onClick={(e) => {e.preventDefault(), handleDelete(item)}}>Delete</button>
                        <FaRegEdit className='w-[40px] h-[20px] text-[#B864F7]' onClick={() => handleEdit(item)} />
                      </div>
                    </div>
                </>
              )
              
        )
      })}
      </ul>
      </div>
  </>
  )
}

export default Home



