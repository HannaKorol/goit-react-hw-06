import { createAction } from "@reduxjs/toolkit";

//Щоб кожного разу не використовувати Type в Counter файлі, ми будем використовувати actions:
//type - це те що треба зробити, payload - з чим треба зробити
export const increment = createAction("inrement"); //цій конст інкремент буде повертатися функцією
export const decrement = createAction("decrement");
