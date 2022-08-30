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
    setTodoList([userInput, ...todoList]);
    setUserInput('')
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
    <div className='w-[25%] h-[35%] bg-orange-100 my-0 mx-auto flex-auto'>
    <CurrentDate />
    <button onClick = {handleInput} className='text-lg bg-orange-700 rounded-[100%] w-[30px] h-[30px]'>+</button>
    {openInput && <form> <input type="text" placeholder='type your message' value={userInput}  onChange={handleChange} /> 
                          <button type='submit' onClick={handleClick}>Send</button> 
                    </form>}
                    
    <ul>
      {todoList.length >= 1 && todoList.map((item, index) => { 
        return  (
              (editTodo === item) ? (
                <>
              <input type="text" value={userInputChange} onChange={(e) => setuserInputChange(e.target.value)} /> 
              <button onClick={(e) => changeValueTodo(item, userInputChange)}>Editer</button>) 
                </>
              ) : (
                <>
                <li key={index}>
                  {item}
                </li>
                 <button onClick={(e) => {e.preventDefault(), handleDelete(item)}}>Delete</button>
                 <FaRegEdit onClick={() => handleEdit(item)} />
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



