/* eslint-disable no-unused-vars */
import React, {Component} from 'react'

export default function EMPLS(){
  const EMPLS =
  [
  {id: 0, name: "____________________________ЛУЧШИЕ СОТРУДНИКИ ЗА ИСТОРИЮ ЭТОГО БАНКА____________________________", size: ""},
  {id: 1, name: "Улжан Кокенова", size: "TOP 1 _________________________Жаль что вы увольняетесь__:(___________"},
  {id: 2, name: "Дармен НН", size: "TOP 2"},
  {id: 3, name: "Диас НН", size: "TOP 3"},
  {id: 4, name: "Айганым НН", size: "TOP 4"},
  ];
  let list = EMPLS.map((EMPLS) => (
  <li key=
  {EMPLS.id}>
  {EMPLS.name} {EMPLS.size}
  </li>
  ));
  return <ul>{list}</ul>
  }
  