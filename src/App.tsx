import React from 'react';
import './App.css';
import './UI/styles.css';
import 'tailwindcss/tailwind.css';
import './resources/ipc';
import { connect } from 'react-redux';
import { State } from './reducers/types';

function App(props: State) {
    return (
        <div>
            <h1>Electron + React + Python. Wow!</h1>
        </div>
    );
}

const mapStateToProps = (state: State) => {
    return state;
};

export default connect(mapStateToProps)(App);
