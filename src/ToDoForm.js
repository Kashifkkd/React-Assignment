import { useState } from 'react';

const ToDoForm = ({ onSubmit }) => {

    const [inputText, setInputText] =  useState("");
    const [enterText, setEnterText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputText===""){
          setEnterText('Please Enter task before submitting!');
          return;
        }
        
        onSubmit(inputText)
        setInputText("")
      }

    const handleInputText = (e) => {
        setInputText(e.target.value);
        setEnterText("")
    }

    return ( 
        <div className="mainContainer">
             {enterText!=="" && <h5 className="text-center my-3 pb-3" id='empty-form'>{enterText}</h5>}
              <form onSubmit={handleSubmit} className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                  <div className="col-12">
                    <div className="form-outline">
                      <input type="text" value={inputText} onChange={handleInputText} id="form1" className="form-control" />
                      <label className="form-label" for="form1">Enter a task here</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">Add Task</button>
                  </div>
            </form>
        </div>
    );
}
 
export default ToDoForm;