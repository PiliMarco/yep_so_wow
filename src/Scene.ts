import { Container } from "pixi.js";
import { GatiJoy } from "./GatilloWithJoy";

export class Scene extends Container {
constructor()
{
    super()
    const gatilloWithJoy : GatiJoy = new GatiJoy();
	gatilloWithJoy.position.set(400,200);
    gatilloWithJoy.scale.set(0.5,0.5);

this.addChild(gatilloWithJoy);
}
}