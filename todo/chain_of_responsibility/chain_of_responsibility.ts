{
    enum Role {
        President = "社長",
        Employee = "社員",
        Parttime = "パート",
        Unknown = "未定義の役割のタスク",
    }
    interface IExecuter {
        exec(role: string ): string;
        setNext(executer: IExecuter): IExecuter;
    }
    class AbstractExecuter implements IExecuter {
        protected nextExecutor: IExecuter | null = null;
        exec(role: string): string {
            if (this.nextExecutor) {
                return this.nextExecutor.exec(role);
            }
            return Role.Unknown;
        }
        setNext(executer: IExecuter): IExecuter {
            this.nextExecutor = executer;
            return this.nextExecutor;
        }
    }
    class President extends AbstractExecuter {
        exec(role: string): string {
            if (role === Role.President) {
                return `${role}のタスク`;
            }
            return super.exec(role);
        }
    }
    class Employee extends AbstractExecuter {
        exec(role: string): string {
            if (role === Role.Employee) {
                return `${role}のタスク`;
            }
            return super.exec(role);
        }
    }
    class Parttime extends AbstractExecuter {
        exec(role: string): string {
            if (role === Role.Parttime) {
                return `${role}のタスク`;
            }
            return super.exec(role);
        }
    }
    // Handlerクラスで、ハンドラーチェーンを管理
    class Handler {
        private firstExecuter: IExecuter;

        constructor(executer: IExecuter) {
            this.firstExecuter = executer;
        }

        exec(role: string): string | null {
            return this.firstExecuter.exec(role);
        }
    }
    class Program {
        static main() {
            const parttime = new Parttime();
            const employee = new Employee();
            const president = new President();
            // ハンドラーチェーンの作成
            parttime.setNext(employee).setNext(president);
            // Handlerにハンドラーチェーンを渡す
            const handler = new Handler(parttime);
            console.log(handler.exec(Role.President));
            console.log(handler.exec(Role.Employee));
            console.log(handler.exec(Role.Parttime));
            console.log(handler.exec("未定義の役割"));  // 未定義の役割の処理
        }
    }
    Program.main();
}