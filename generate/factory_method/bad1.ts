{
    class Product {
        do() {
            console.log("product constructor")
        }
    }

    class Factory {
        public create() {
            const method = new Product();
            return method;
        }
    }

    class Logic
    {
        private factory: Factory;
        constructor() {
            this.factory = new Factory();
        }
        do(): Product
        {
            return this.factory.create();
        }
    }

    class Program
    {
        static main() {
            const logic: Logic  = new Logic();
            const product = logic.do();
        }
    }
    Program.main()
}

