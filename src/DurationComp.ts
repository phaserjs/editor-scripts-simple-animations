
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DurationComp {

	constructor(gameObject: any) {
		this.gameObject = gameObject;
		(gameObject as any)["__DurationComp"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: any): DurationComp {
		return (gameObject as any)["__DurationComp"];
	}

	private gameObject: any;
	public duration: number = 250;
	public delay: number = 0;

	/* START-USER-CODE */

	static getDuration(obj: any, defaultValue: number) {

		const comp = DurationComp.getComponent(obj);

		if (comp) {

			return comp.duration;
		}

		return defaultValue;
	}

	static getDelay(obj: any, defaultValue: number) {

		const comp = DurationComp.getComponent(obj);

		if (comp) {

			return comp.delay;
		}

		return defaultValue;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
