import { useState } from "react";



const App = () => {
  const submithandeler = (e) =>{
    console.log(title,delalis);
    const CopyTask = [...task];
    CopyTask.push({title , delalis})
    setTitle('')
    setDelalis('')
    e.preventDefaut()
    
    setTask(CopyTask)
    
  }
  const [title, setTitle] = useState();
  const [delalis, setDelalis] = useState();
  const [task, setTask] = useState([])

  return (
    <div className="h-screen lg:flex  bg-black text-white">
  
      <form  onSubmit={(e) =>{
        submithandeler(e)
      }}
      
      className="flex lg:w-1/2 p-10 justify-between  items-start">
        <div className="flex items-start gap-4 flex-col w-1/2">
        <h1>Add notes</h1>
          <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 rounded outline-none"
          value={title}
          onChange={(e)=>{
               setTitle(e.target.value)
          }}
        />

        <textarea
          type="text"
          placeholder="Enter Details "
          className="px-5 w-full  h-40 py-2 flex   flex-row items-start border-2 rounded outline-none font-medium"
          value={delalis}
          onChange={(e)=>{
            setDelalis(e.target.value)
          }}
        />
        <button className="bg-white w-full text-black rounded  py-5 py -2 outline-none font-medium">
          Add Note
        </button>
        </div>
        
      </form>
      <div  className="flex flex-wrap p-10 lg:w-1/2 bg-gray-900 gap-5">
      <h1 className="text-xl font-bold">your notes</h1>
        

          {task.map(function(){
             return <div className="h-52  w-52 rounded-2xl bg-white "></div>
          })}
        </div>
        
      </div>
    
  );
};

export default App;
