import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import GoodsCard from './components/GoodsCard';
import { odessaSouvenirs } from './data';

function App() {
  return (
    <div>
      <div>
        <Header />
        <Content />
      </div>
      <div className="task-2">
        <h1>Сувеніри Одеси:</h1>
        <div className="goods-container">
          {odessaSouvenirs.map((souvenir) => (
            <GoodsCard
              key={souvenir.id}
              name={souvenir.name}
              price={souvenir.price}
              image={souvenir.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
