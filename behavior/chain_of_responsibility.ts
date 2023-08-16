{
  // 処理ハンドラーインターフェース
  interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: any): string | null;
  }

  // ハンドラーチェーンの管理クラス
  class AbstractHandler implements Handler {
    private _nextHandler: Handler | null = null;

    setNext(handler: Handler): Handler {
      this._nextHandler = handler;
      return handler;
    }

    handle(request: any): string | null {
      if (this._nextHandler) {
        return this._nextHandler.handle(request);
      }
      return null;
    }
  }

  // 仕事用アドレス管理クラス
  class BusinessHandler extends AbstractHandler {
    handle(request: any): string | null {
      if (request === "仕事") {
        return `└　○ 上司からのメールを「${request}フォルダ」に移動しました`;
      } else {
        return super.handle(request);
      }
    }
  }

  // プライベート用アドレス管理クラス
  class PrivateHandler extends AbstractHandler {
    handle(request: any): string | null {
      if (request === "プライベート") {
        return `└　○ 友人からのメールを「${request}フォルダ」に移動しました`;
      } else {
        return super.handle(request);
      }
    }
  }

  // 身元不明アドレス管理クラス
  class UnknownHandler extends AbstractHandler {
    handle(request: any): string | null {
      if (request === "その他") {
        return `└　○ 登録済みのメールを「${request}フォルダ」に移動しました`;
      } else {
        return super.handle(request);
      }
    }
  }

  // クライアント側のメールボックス
  function clientCode(handler: Handler): void {
    const folders = ["仕事", "プライベート", "その他", "スパム"];

    for (const folder of folders) {
      console.log(`\n ${folder}フォルダ`);
      const result = handler.handle(folder);
      if (result) {
        console.log(`  ${result}`);
      } else {
        console.log(`　└　✕  スパムメールを「迷惑メール」フォルダに入れました`);
      }
    }
  }

  class Program {
    static main() {
      const business = new BusinessHandler(); // 仕事用アドレス
      const privateHandler = new PrivateHandler(); // プライベート用アドレス
      const unknownHandler = new UnknownHandler(); // その他アドレス

      // メールフィルター優先度設定（仕事 > プライベート > 不明）
      unknownHandler.setNext(privateHandler).setNext(business);

      console.log("【①メインフィルター】: 仕事とプライベート以外はスパム扱い");
      clientCode(privateHandler);
      console.log(
        "\n-------------------------------------------------------------\n"
      );
      console.log(
        "【②サブフィルター】: 不明アドレスでも受信許可リストにあれば受信"
      );
      clientCode(unknownHandler);
    }
  }
}

{
  abstract class Car {
	public abstract ok;
    abstract run();
  }

  class SuperCar extends Car {
	public ok;
	public run () {}
  }
  const mercedes = new SuperCar();
  mercedes.run();
}
