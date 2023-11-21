
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phasereditor2d/scripts-core";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import DurationComp from "./DurationComp";
import EaseComp from "./EaseComp";
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

		const sprite = this.gameObject as Phaser.GameObjects.Sprite;

		const duration = DurationComp.getDuration(this, 250);
		const delay = DurationComp.getDelay(this, 0);
		const ease = EaseComp.getEase(this, "Expo");

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
				fromY = this.scene.scale.height + sprite.displayHeight;
				break;
		}

		sprite.setPosition(fromX, fromY);

		this.scene.add.tween({
			targets: sprite,
			x,
			y,
			duration,
			delay,
			ease
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
