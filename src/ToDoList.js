const ToDoList = ({ toDoList,deleteItem,updateValue }) => {
    let count = 1;
    return ( 
        <div>
            <table className="table mb-4">
            {toDoList.length === 0 && <h3 className="text-center my-3 pb-3" id='empty-list'>No Items</h3>}
            {toDoList.length > 0 && 
                <thead>
                <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Todo item</th>
                    <th scope="col">Mark  /  Delete</th>
                </tr>
                </thead>
            }
            {toDoList.map((todos) => {
                return <tbody>
                <tr>
                    <th scope="row">{count++}</th>
                    <td>
                        {todos.completed && <del>{todos.title}</del>}
                        {!todos.completed && todos.title}
                    </td>
                    <td>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={ (e) => {
                        updateValue(todos.id)
                        e.target.checked = todos.completed;
                    }} checked={todos.completed} />
                    <button type="submit" className="btn btn-danger" onClick={(e) => deleteItem(todos.id)}>Delete</button>

                    </td>
                </tr>
                
                </tbody>
            })}
                </table>        
            <div className="display-list">
        </div>
      </div>

     );
}
 
export default ToDoList;