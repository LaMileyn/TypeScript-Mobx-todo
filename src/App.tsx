import React, {FC} from 'react';
import TodoList from "./components/TodoList/TodoList";
import './styles/main.scss'


const App: FC = () => {

    return (
        <div className="App">
            <div className="container">
                <TodoList/>
            </div>
        </div>
    );
}

export default App;
