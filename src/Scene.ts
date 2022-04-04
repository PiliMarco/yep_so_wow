import { Container } from "pixi.js";
import { GatiJoy } from "./GatilloWithJoy";
import { GanasteUi } from "./Ui_Win";

export class Scene extends Container {
constructor()
{
    super();
    const gatilloWithJoy : GatiJoy = new GatiJoy();
	gatilloWithJoy.position.set(100,200);
    gatilloWithJoy.scale.set(0.5,0.5);
    this.addChild(gatilloWithJoy);
    
    const GanasteSprites : GanasteUi = new GanasteUi();
    GanasteSprites.position.set(400,80);
    GanasteSprites.scale.set(0.9,0.9);
    this.addChild(GanasteSprites)

    

}
}
/*export class GanasteUi extends Container {
    
}*/