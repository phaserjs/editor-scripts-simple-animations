# Phaser Editor 2D Simple Animation Scripts (library)

This project contains Phaser Editor 2D scripts for adding simple animations to your game.

These script nodes are very basic and may fit on any Phaser Editor 2D project.

The scripts are coded in TypeScript with ES modules.

## Installing (NPM)

This package depends on the following packages:

- `@phasereditor2d/scripts-core`

To install this in your game you have to install dependencies too:

```
npm install @phasereditor2d/scripts-core
npm install @phasereditor2d/scripts-simple-animations
```

Also, you should add this package to the `phasereditor2d.config.json` file in your project, in the `scripts` section:

```json
{
    "scripts": [
        "@phasereditor2d/scripts-core",
        "@phasereditor2d/scripts-simple-animations"
    ]
}
```

## Installing (vanilla JavaScript)

* Get the files in the [browser](./browser/) folder and copy them into your JavaScript project. It includes Phaser Editor 2D files, JavaScript files, and TypeScript type definitions.
* Add a `script` tag to the `index.html` file to load the `lib/phasereditor2d_scripts_core.js` file.

## Summary

This library provides a couple of actions for animating an object. It also contains user components for adding extra configuration to some of the actions. As a reminder, an action is executed by an event script or another action.

The actions:

* **Fade Object Action** - Animates the `alpha` value of an object for fading it in or out.
* **Move To Scene Action** - Animates the object from the outside of the screen to its initial position.
* **Move Out Scene Action** - Animates the object outside the scene from its initial position.
* **Push Action** - Animates the scale of the object, with a "push" effect.

The user components:

* **Delay Config** - Configures the delay of an animation script.
* **Duration Config** - Configures the duration of an animation script.
* **Ease Config** - Configures the ease of an animation script.

## Fade Object Action

*Class: `FadeActionScript`*

This action animates the `alpha` parameter of the game object to fade it in or out.

The **Fade Direction** of the script indicates if it will fade "in" or "out".

You can configure the delay, duration, and ease of the animation by adding the **Delay Config**, **Duration Config**, and **Ease Config** components to the script.

When the animation completes, the script executes the children's scripts.

## Move To Scene Action (`MoveInSceneActionScript.scene`)

*Class: `MoveInSceneActionScript`*

This script moves the game object from outside the scene to the current position. You can set the direction from where the object enters the scene, in the **From** property. The possible values are **LEFT**, **RIGHT**, **TOP**, **BOTTOM**, and **NONE**.

You can configure the delay, duration, and ease of the animation by adding the **Delay Config**, **Duration Config**, and **Ease Config** components to the script.

When the animation completes, the script executes the children's scripts.

## Move Out Scene Action

*Class: `MoveOutSceneActionScript`*

This script moves the game object to the outside of the scene. You can set the direction to where the object exits the scene, in the **To** property. The possible values are **LEFT**, **RIGHT**, **TOP**, **BOTTOM**, and **NONE**.

You can configure the delay, duration, and ease of the animation by adding the **Delay Config**, **Duration Config**, and **Ease Config** components to the script.

When the animation completes, the script executes the children's scripts.

## Push Action 

*Class: `PushActionScript`*

This script performs a push-button-like effect on the game object, scaling it down and out, and restoring the initial scale.

You can configure the duration of the animation by adding the **Duration Config** user component.

## Delay Config

*Class: `DelayConfigComp`*<br>
*File: `Animation.components`*

This component contains the **Delay** property. You can add it to the animation scripts to change the default **delay** of the animations.

## Duration Config

*Class: `DurationConfigComp`*<br>
*File: `Animation.components`*

This component contains the **Duration** property. You can add it to the animation scripts to change the default **duration** of the animations.

## Ease Config

*Class: `DurationConfigComp`*<br>
*File: `Animation.components`*

This component contains the **Ease** property. It is an Option property to select an ease function from the Phaser Ease default constants: `Power0`,..., `Power4`, `Linear`, `Quad`, `Cubic`,..., `Expo.easeIn`, `Expo.easeOut`, etc...

You can add this component to the animation scripts to change the default **ease** of the animations.