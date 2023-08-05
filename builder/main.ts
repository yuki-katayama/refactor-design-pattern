// メリット: 作成の種類が異なるパターンの際に、冗長な引数を与えなくても良い

import Director from "./director";
import { SummerHouseBuilder, WinterHouseBuilder } from "./builder"
import { summerHouseModel, winterHouseModel } from "./model"

const director = new Director();
const summerBuilder = new SummerHouseBuilder();
director.constructSummerHouse(summerBuilder)
const summberHouse: summerHouseModel = summerBuilder.getSummerHouse();

const winterBuilder = new WinterHouseBuilder();
director.constructWinterHouse(winterBuilder);
const winterHouse: winterHouseModel = winterBuilder.getWinterHouse();
console.log(summberHouse.color, winterHouse.color);


// constructWinterHouse("footerPlan","toiletType","color",true,true)
// constructSummerHouse("footerPlan","toiletType",null,true,true)