var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var HouseBuilder = /** @class */ (function () {
    function HouseBuilder() {
    }
    return HouseBuilder;
}());
var SummerHouse = /** @class */ (function () {
    function SummerHouse() {
    }
    return SummerHouse;
}());
var WinterHouse = /** @class */ (function () {
    function WinterHouse() {
    }
    return WinterHouse;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.constructSummerHouse = function (builder) {
        builder.reset();
        builder.setFloorPlan("2ldk");
        builder.setToiletType("和式");
        builder.setHaveGarage(false);
    };
    Director.prototype.constructWinterHouse = function (builder) {
        builder.reset();
        builder.setFloorPlan("1d");
        builder.setToiletType("洋式");
        builder.setHaveGarage(true);
    };
    return Director;
}());
var WinterHouseBuilder = /** @class */ (function (_super) {
    __extends(WinterHouseBuilder, _super);
    function WinterHouseBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WinterHouseBuilder.prototype.constractor = function () {
        this.reset();
    };
    WinterHouseBuilder.prototype.reset = function () {
        this.house = new WinterHouse();
    };
    WinterHouseBuilder.prototype.setFloorPlan = function (type) {
        this.house.floorPlan = type;
    };
    WinterHouseBuilder.prototype.setToiletType = function (type) {
        this.house.toiletType = type;
    };
    WinterHouseBuilder.prototype.setColor = function (color) {
        this.house.color = color;
    };
    WinterHouseBuilder.prototype.setHaveGarage = function (have) {
        this.house.haveGarage = have;
    };
    WinterHouseBuilder.prototype.getWinterHouse = function () {
        return __assign({}, this.house);
    };
    return WinterHouseBuilder;
}(HouseBuilder));
var SummerHouseBuilder = /** @class */ (function (_super) {
    __extends(SummerHouseBuilder, _super);
    function SummerHouseBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SummerHouseBuilder.prototype.constractor = function () {
        this.reset();
    };
    SummerHouseBuilder.prototype.reset = function () {
        this.house = new SummerHouse();
    };
    SummerHouseBuilder.prototype.setFloorPlan = function (type) {
        this.house.floorPlan = type;
    };
    SummerHouseBuilder.prototype.setToiletType = function (type) {
        this.house.toiletType = type;
    };
    SummerHouseBuilder.prototype.setColor = function (color) {
        this.house.color = color;
    };
    SummerHouseBuilder.prototype.setHaveGarage = function (have) {
        this.house.haveGarage = have;
    };
    SummerHouseBuilder.prototype.getSummerHouse = function () {
        return __assign({}, this.house);
    };
    return SummerHouseBuilder;
}(HouseBuilder));
var director = new Director();
var summerBuilder = new SummerHouseBuilder();
director.constructSummerHouse(summerBuilder);
var summberHouse = summerBuilder.getSummerHouse();
console.log(summberHouse.floorPlan);
