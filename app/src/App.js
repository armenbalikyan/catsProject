import "./App.css";
import Main from "./Main";
import {Provider} from "react-redux";
import store from './Store/store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Main/>
            </div>
        </Provider>
    );
}

export default App;
