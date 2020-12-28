const TodoItem = ({ text, clickToToggle, clickToDelete, complete }) => {
    return (
        <div>
            <span style={{color: complete ? 'green' : 'red'}}><h1>{text}</h1></span>
            <div className="btn__div">
                <button className="toggle__btn" onClick={clickToToggle}>TOOGLE</button>
                <button className="delete__btn" onClick={clickToDelete}>DELETE</button>
            </div>
        </div>
    )
}

export default TodoItem;