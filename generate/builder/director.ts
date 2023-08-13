import { HouseBuilder } from "./builder"

export default class Director {
	public constructSummerHouse(builder: HouseBuilder) {
		builder.reset();
		builder.setFloorPlan("2ldk")
		builder.setToiletType("和式")
		builder.setHaveGarage(false)
		builder.setColor("white")
	}
	public constructWinterHouse(builder: HouseBuilder) {
		builder.reset();
		builder.setFloorPlan("1d")
		builder.setToiletType("洋式")
		builder.setHaveGarage(true)
	}
}