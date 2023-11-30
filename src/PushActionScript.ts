
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phasereditor2d/scripts-core";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import DurationConfigComp from "./DurationConfigComp";
/* END-USER-IMPORTS */

export default class PushActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */


	private _executing = false;

	override execute(args?: any): void {

		if (this._executing) {

			return;
		}

		if (!this.gameObject) {

			return;
		}

		this._executing = true;

		const duration = DurationConfigComp.getDuration(this, 80);

		const { scaleX, scaleY } = this.gameObject as Phaser.GameObjects.Sprite;

		this.scene.add.tween({
			targets: this.gameObject,
			scaleX: scaleX * 0.8,
			scaleY: scaleY * 0.8,
			duration,
			yoyo: true,
			onYoyo: () => {

				this.executeChildren(args);
			},
			onComplete: () => {

				this._executing = false;
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
