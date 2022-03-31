import { Container, Sprite } from "pixi.js";

export class GatiJoy extends Container {
    constructor (){
        super ();
    const joystick: Sprite = Sprite.from("joystick");
	const Gatillo: Sprite = Sprite.from("Gatillo");

    joystick.position.set(-10,434);
	joystick.rotation = 250; 
    
    
    this.addChild(Gatillo);
    this.addChild(joystick);

}}