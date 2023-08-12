class Settings {
	static _instance: Settings;
	public readonly mode = "dark";
	private constructor() {}
	static instance(): Settings {
		if (!this._instance) {
			this._instance = new Settings();
		}
		return this._instance
	}
}

console.log(Settings.instance().mode)

