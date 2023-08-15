{
    abstract class IProduct {
        public abstract do(): void;
    }

    class Product extends IProduct {
        public do() {
            console.log("product constructor")
        }
    }

    interface IFactory {
        create();
    }


    class Factory implements IFactory {
        create() {
            const method = new Product();
            return method;
        }
    }

    class Logic
    {
        private factory: IFactory;
        constructor(factory: IFactory) {
            this.factory = factory;
        }
        public do() {
            this.factory.create();
        }
    }

    class Program
    {
        static main() {
            const logic: Logic  = new Logic(new Factory());
            logic.do()
        }
    }

    Program.main()
}