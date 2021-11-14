import React,{useRef} from "react";

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    // const [title,setTItle] = useState<string>('')
    const ref = useRef<HTMLInputElement>(null)
    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTItle(event.target.value)
    // } 

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter'){
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
            // console.log(title)
            // setTItle('')
        }
    }
    return(
        <div className="input-field mt2">
            <input 
            ref={ref}
             onKeyPress={keyPressHandler}// onChange={changeHandler} 
            type="text" id="title" placeholder="Введите название задачи"/> 
            <label htmlFor="title" className="active">Введите название задачи</label>
        </div>
    )
}