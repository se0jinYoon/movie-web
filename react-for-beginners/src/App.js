import {useState, useEffect} from "react";

function App () {
  const [toDo, setToDo] = useState("");
  // application이 시작할 때 toDos = []
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    
    // 첫 번째 toDo를 입력하면 현재 toDos에 저장된 값([])을 currentArray로 불러오고
    // input을 통해 지금 작성한 toDo와 현재 toDos의 값을 합쳐서 새로운 array로 set해준다
    setToDos((currentArray) => [toDo, ...currentArray]);

    setToDo(""); 
  };
  

  return (
  <div> 
    <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit = {onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="Write your to do..." 
        />
        <button>Add To Do</button>
      </form>   
      <hr />
      {/* toDos의 element들을 component로 만들기 */}
      <ul>
        {toDos.map((item, index) => ( 
          <li key={index}>{item}</li>
        ))}
      </ul>
  </div>
  )
}

export default App;