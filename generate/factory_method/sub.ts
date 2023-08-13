interface AbstractDataReader {
    read(): any;
}

class CSVDataReaderd implements AbstractDataReader {
    read(): any {
        // CSVデータ読み取りロジックを実装
		console.log("read CSV...");
        return {};
    }
}

class XMLDataReaderd implements AbstractDataReader {
    read(): any {
        // XMLデータ読み取りロジックを実装
		console.log("read XML...");
        return {};
    }
}

const CSV = 1;  // 定数の定義
const XML = 2;  // 定数の定義

class Factory {
    create(formatId: number): AbstractDataReader | null {
        let reader: AbstractDataReader | null = null;
        if (CSV === formatId) {
            reader = new CSVDataReaderd();
        } else if (XML === formatId) {
            reader = new XMLDataReaderd();
        }
        return reader;
    }
}

let reader: AbstractDataReader | null = null;
const factory = new Factory();
const formatId = CSV;  // 例としてCSVを設定。実際の値に応じて変更してください。
reader = factory.create(formatId);

if (reader) {
    const data = reader.read();
    // ここでdataを使用
}
