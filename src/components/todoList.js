import "./css/todoList.css"

export const TodoList = props => {
    const {children} = props

    return (
        <section>
            <ul>
                {children}
            </ul>
        </section>
    )
}