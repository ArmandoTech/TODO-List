import "./css/todoItem.css"

export const TodoItem = props => {
    const { text, completed } = props
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>
                ᄼ 
            </span>
            <p className={`TodoItem-p ${completed && 'TodoItem-p--completed'}`}>
                {text}
            </p>
            <span className="Icon Icon-delete">
                X
            </span>
        </li>
    )
}