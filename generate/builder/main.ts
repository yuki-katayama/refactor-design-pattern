// メリット: 作成の種類が異なるパターンの際に、冗長な引数を与えなくても良い。builderがなければ、ひたすら長い引数を記載する必要がある。

import Director from "./director";
import { SummerHouseBuilder, WinterHouseBuilder } from "./builder"
import { summerHouseModel, winterHouseModel } from "./model"
{
	class Program {
		static main() {
			const director = new Director();
			const summerBuilder = new SummerHouseBuilder();
			director.constructSummerHouse(summerBuilder)
			const summberHouse: summerHouseModel = summerBuilder.getSummerHouse();

			const winterBuilder = new WinterHouseBuilder();
			director.constructWinterHouse(winterBuilder);
			const winterHouse: winterHouseModel = winterBuilder.getWinterHouse();
			console.log(summberHouse.color, winterHouse.color);
		}
	}
	Program.main();
}
// constructWinterHouse("footerPlan","toiletType","color",true,true)
// constructSummerHouse("footerPlan","toiletType",null,true,true)