// src/App.jsx
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
    return (
        <div>
            <NavBar />
            {/* Pasamos la prop greeting con el mensaje que quieras */}
            <ItemListContainer greeting="¡Bienvenidos a mi E-commerce!" />
        </div>
    );
};

export default App;




