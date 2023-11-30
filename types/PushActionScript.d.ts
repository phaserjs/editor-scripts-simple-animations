import { ScriptNode } from "@phasereditor2d/scripts-core";
import Phaser from "phaser";
export default class PushActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    private _executing;
    execute(args?: any): void;
}
