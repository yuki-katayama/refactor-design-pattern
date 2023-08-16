{
  abstract class AbstractReader {
    abstract read(): any;
  }

  class CSVReader implements AbstractReader {
    read(): void {
      // CSVデータ読み取りロジックを実装
      console.log("read CSV...");
    }
  }

  class XMLReader implements AbstractReader {
    read(): void {
      // XMLデータ読み取りロジックを実装
      console.log("read XML...");
    }
  }

  class Factory {
    create(formatId: number): AbstractReader | null {
      let reader: AbstractReader | null = null;
      if (CSV === formatId) {
        reader = new CSVReader();
      } else if (XML === formatId) {
        reader = new XMLReader();
      }
      return reader;
    }
  }

  const CSV = 1; // 定数の定義
  const XML = 2; // 定数の定義
  class Program {
    static main() {
      let reader: AbstractReader | null = null;
      const factory = new Factory();
      const formatIds = [CSV, XML]; // 例としてCSVを設定。実際の値に応じて変更してください。
      for (let id of formatIds) {
        reader = factory.create(id);
        if (reader) {
          reader.read();
        }
      }
    }
  }
  Program.main();
}
