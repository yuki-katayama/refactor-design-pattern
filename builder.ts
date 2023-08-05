abstract class HouseBuilder {
	public abstract reset(): void;
	public abstract setFloorPlan(type: string): void;
	public abstract setToiletType(type: string): void;
	public abstract setColor(type: string): void;
	public abstract setHaveGarage(type: boolean): void;
}

interface winterHouseModel {
	floorPlan: string,
	toiletType: string,
	color: string,
	haveBasement: boolean,
	haveGarage: boolean,
}

interface summerHouseModel {
	floorPlan: string,
	toiletType: string,
	color: string,
	haveBasement: boolean,
	haveGarage: boolean,
}

 class SummerHouse {
	floorPlan: string
	toiletType: string
	color: string
	haveBasement: boolean
	haveGarage: boolean
 }

 class WinterHouse {
	floorPlan: string
	toiletType: string
	color: string
	haveBasement: boolean
	haveGarage: boolean
 }

class Director {
	public constructSummerHouse(builder: HouseBuilder) {
		builder.reset();
		builder.setFloorPlan("2ldk")
		builder.setToiletType("和式")
		builder.setHaveGarage(false)
	}
	public constructWinterHouse(builder: HouseBuilder) {
		builder.reset();
		builder.setFloorPlan("1d")
		builder.setToiletType("洋式")
		builder.setHaveGarage(true)
	}
}

class WinterHouseBuilder extends HouseBuilder {
	private house: winterHouseModel;
	constractor() {
		this.reset();
	}
	public reset() {
		this.house = new WinterHouse();
	}
	public setFloorPlan(type: string) {
		this.house.floorPlan = type;
	}
	public setToiletType(type: string) {
		this.house.toiletType = type;
	}
	public setColor(color: string) {
		this.house.color = color;
	}
	public setHaveGarage(have: boolean) {
		this.house.haveGarage = have;
	}
	public getWinterHouse(): winterHouseModel {
		return {...this.house};
	}
}


class SummerHouseBuilder extends HouseBuilder {
	private house: summerHouseModel;
	constractor() {
		this.reset();
	}
	public reset(): void {
		this.house = new SummerHouse();
	}
	public setFloorPlan(type: string) {
		this.house.floorPlan = type;
	}
	public setToiletType(type: string) {
		this.house.toiletType = type;
	}
	public setColor(color: string) {
		this.house.color = color;
	}
	public setHaveGarage(have: boolean) {
		this.house.haveGarage = have;
	}
	public getSummerHouse(): summerHouseModel{
		return {...this.house};
	}
}

const director = new Director();
const summerBuilder = new SummerHouseBuilder();
director.constructSummerHouse(summerBuilder)
const summberHouse = summerBuilder.getSummerHouse();
console.log(summberHouse.floorPlan)


// constructWinterHouse("footerPlan","toiletType","color",true,true)
// constructSummerHouse("footerPlan","toiletType",null,true,true)