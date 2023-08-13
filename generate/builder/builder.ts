import { winterHouseModel, summerHouseModel } from "./model"

export abstract class HouseBuilder {
	public abstract reset(): void;
	public abstract setFloorPlan(type: string): void;
	public abstract setToiletType(type: string): void;
	public abstract setColor(type: string): void;
	public abstract setHaveGarage(type: boolean): void;
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

export class WinterHouseBuilder extends HouseBuilder {
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


export class SummerHouseBuilder extends HouseBuilder {
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