interface Button {
    render(): void;
    onClick(f: Function): void;
}

class WindowsButton implements Button {
    render() {
		console.log("windows: render")
    }

    onClick(f: Function) {
		console.log("windows: onClick")
    }
}

class MacButton implements Button {
    render() {
		console.log("mac: render")
    }

    onClick(f: Function) {
		f()
    }
}

// クリエーター・クラスは、ファクトリー・メソッドを宣言。
abstract class Dialog {
    abstract createButton(): Button;

    render() {
		const okButton = this.createButton();
        okButton.render();
        okButton.onClick(() => this.closeDialog());
    }

    closeDialog() {
        // ダイアログを閉じるロジック。
		console.log("closeDialog")
    }
}

// 具象クリエーターはファクトリー・メソッドを上書きして、結果のプロダクトの型を変更。
class WindowsDialog extends Dialog {
    createButton(): Button {
        return new WindowsButton();
    }
}

class MacDialog extends Dialog {
    createButton(): Button {
        return new MacButton();
    }
}

class Application {
    dialog: Dialog;

	constructor() {
		this.initialize();
		this.dialog.render();
	}

	initialize() {
		// 仮定: readApplicationConfigFile は何らかの設定情報を取得する関数。
        const os = this.getOS();
        if (os === "Windows") {
			this.dialog = new WindowsDialog();
        } else if (os === "Mac") {
			this.dialog = new MacDialog();
        } else {
			throw new Error("Error! Unknown operating system.");
        }
    }
	
	getOS() {
		return "Mac"
	}

}

const app = new Application();