
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phasereditor2d/scripts-core";
import Phaser from "phaser";
import DurationComp from "./DurationComp";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MoveInAction extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public from: "LEFT" | "RIGHT" | "TOP" | "BOTTOM" | "NONE" = "NONE";

	/* START-USER-CODE */

	execute(...args: any[]): void {

		if (!this.gameObject) {

			return;
		}

		console.log("execute move in action");

		const sprite = this.gameObject as Phaser.GameObjects.Sprite;

		const duration = DurationComp.getDuration(this, 250);

		const { x, y } = sprite;

		let fromX = x;
		let fromY = y;

		switch (this.from) {

			case "LEFT":

				fromX = -sprite.displayWidth;
				break;

			case "RIGHT":

				fromX = this.scene.scale.width + sprite.displayWidth;
				break;

			case "TOP":
				fromY = -sprite.displayHeight;
				break;

			case "BOTTOM":
				fromY = this.scene.scale.height;
				break;
		}

		this.scene.add.tween({
			targets: sprite,
			x: {
				from: fromX,
				to: x
			},
			y: {
				from: fromY,
				to: y
			},
			duration,
			ease: Phaser.Math.Easing.Expo.Out
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
