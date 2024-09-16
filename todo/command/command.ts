{
    enum Role {
        President = "社長",
        Employee = "社員",
        Parttime = "パート",
        Unknown = "未定義の役割のタスク",
    }
    interface ICommand {
        exec(): string
    }

    class PresidentCommand implements ICommand {
        public exec(): string {
            return `${Role.President}のタスク`
        }
    }
    class EmployeeCommand implements ICommand {
        public exec(): string {
            return `${Role.Employee}のタスク`
        }
    }
    class ParttimeCommand implements ICommand {
        public exec(): string {
            return `${Role.Parttime}のタスク`
        }
    }
    class Executer {
        private history: ICommand[] = []
        private undoHistory: ICommand[] = []
        private tasks: string[] = []
        exec(command: ICommand): void {
            this.history.push(command)
            this.tasks.push(command.exec())
        }
        undo() {
            if(this.history.length) {
                const lastCommand = this.history.pop();
                this.undoHistory.push(lastCommand!);
                this.tasks.pop();
            } else {
                console.log("undoできません")
            }
        }
        redo(): void {
            if (this.undoHistory.length) {
                const lastUndoneCommand = this.undoHistory.pop();
                if (lastUndoneCommand) {
                    this.exec(lastUndoneCommand);
                }
            } else {
                console.log("Redoできるタスクがありません。");
            }
        }
        print(): void {
            console.log(`タスク: ${this.tasks.join(", ")}`);
            console.log(`履歴: ${this.history.map((cmd) => cmd.exec()).join(", ")}`);
            console.log(`Undo履歴: ${this.undoHistory.map((cmd) => cmd.exec()).join(", ")}`);
        }
    }
    class Handler {
        static main(): void {
            const executer = new Executer()
            executer.exec(new ParttimeCommand())
            executer.exec(new EmployeeCommand())
            executer.print()
            executer.redo()
            executer.undo()
            executer.undo()
            executer.redo()
            executer.exec(new PresidentCommand())
            executer.redo()
            executer.undo()
            executer.print()
        }
    }
    Handler.main()
}