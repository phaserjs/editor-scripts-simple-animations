import { ScriptNode } from "@phasereditor2d/scripts-core";
import Phaser from "phaser";
export default class MoveInAction extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    from: "LEFT" | "RIGHT" | "TOP" | "BOTTOM" | "NONE";
    execute(...args: any[]): void;
}
