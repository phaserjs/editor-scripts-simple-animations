import { ScriptNode } from "@phasereditor2d/scripts-core";
import Phaser from "phaser";
export default class FadeActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    fadeDirection: "FadeIn" | "FadeOut";
    execute(...args: any[]): void;
}
