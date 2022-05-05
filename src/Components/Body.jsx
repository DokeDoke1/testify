import React from "react";
import DIV from "./DIV";

function Body() {
  
    return (
      <div className="Body1">
        
        <h1 className='main' >Интернет-магазин на Kaspi.kz</h1>
        <div className="Mega">
        <DIV text="Гаджеты" box={require('../iphone-2x.png')}></DIV>
        <DIV text="Компьютеры" box={require('../apple-2x.png')}></DIV>
        <DIV text="Обувь" box={require('../shoes-2x.png')}></DIV>
        <DIV text="Одежда" box={require('../clothes-2x.png')}></DIV>
        <DIV text="Аксессуары" box={require('../decorations-2x.png')}></DIV>
        <DIV text="Спорт" box={require('../sport-2x.png')}></DIV>
        <DIV text="Подарки" box={require('../gifts-2x.png')}></DIV>
        <DIV text="Красота" box={require('../beauty-2x.png')}></DIV>
        <DIV text="Животные" box={require('../pets-2x.png')}></DIV>
        <DIV text="Аудио" box={require('../media-2x.png')}></DIV>
        </div>
      
      </div>
    );
  }
export default Body;