import './App.css';
import Dialogs from "./Components/Dialogs/Dialogs";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div>Hello World! Бляяяяять</div>
            </header>
            <div className={'app-wrapper-content'}>
                <Dialogs name='Напишу тут Хуету' />
            </div>
        </div>
    );
}

export default App;
