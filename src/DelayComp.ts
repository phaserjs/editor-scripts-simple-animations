
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DelayComp {

	constructor(gameObject: any) {
		this.gameObject = gameObject;
		(gameObject as any)["__DelayComp"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: any): DelayComp {
		return (gameObject as any)["__DelayComp"];
	}

	private gameObject: any;
	public delay: number = 0;

	/* START-USER-CODE */

	static getDelay(obj: any, defaultValue: number) {

		const comp = DelayComp.getComponent(obj);

		if (comp) {

			return comp.delay;
		}

		return defaultValue;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
