// 既存のクラスを複数組み合わせて使う手順を、「窓口」となるクラスを作ってシンプルに利用できるようにするパターン
// 複雑なサブシステムに対して外側で限定的でわかりやすいインターフェースが必要な場合に機能へのショートカットを提供する役割
// 読みはファサードでフランス語を語源とする単語で「建物の正面」という意味。

class PlumbingSystem {
	// low evel access to plubming system
	setPressure(v: number) {}
	turnOn() {}
	turnOff() {}
  }
  
  class ElectricalSystem {
	// low evel access to electrical system
	setVoltage(v: number) {}
	turnOn() {}
	turnOff() {}
  }
  
  class Facade {
  
	private plumbing = new PlumbingSystem();
	private electrical = new ElectricalSystem();
  
	public turnOnSystems() {
	  this.electrical.setVoltage(120);
	  this.electrical.turnOn();
	  this.plumbing.setPressure(500);
	  this.plumbing.turnOn();
	}
  
	public shutDown() {
	  this.plumbing.turnOff();
	  this.electrical.turnOff();
	}
  }

  class Program {
	static main() {
		const client = new Facade();
		client.turnOnSystems();
		client.shutDown();
	}
  }