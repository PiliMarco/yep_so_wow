import { Container, Sprite, Texture } from "pixi.js";
import { Button } from "../UI/Button";
import { Keyboard } from "../utils/Keyboard";
export class UiMenu extends Container
{
private exitbutton:Button
private settingsbutton:Button
private startbutton:Button
    constructor(){

        super();
        const dialog = new Container();
        dialog.x = 100;
        dialog.y = 0;

        const background = Sprite.from("tablamenuespacial");
        background.scale.set(2);
        background.position.set(-110,0);
        dialog.addChild(background);
        
        
        this.startbutton = new Button(Texture.from("playbutton"), 
        Texture.from("playbuttondown"), Texture.from("playcolbutton"));
        this.startbutton.on("ButtonClicked", this.onButtonClick, this)
        this.startbutton.scale.set(0.35);
        this.startbutton.position.set(450,230);
        
        dialog.addChild(this.startbutton);

        this.settingsbutton = new Button(Texture.from("settingsbutton"),
         Texture.from("settingsbuttondown"), Texture.from("settingscolbutton")),
        this.settingsbutton.on("ButtonClicked", this.onButtonClick, this);
        this.settingsbutton.scale.set(0.35);
        this.settingsbutton.position.set(450,330);
       
        dialog.addChild(this.settingsbutton);

        this.exitbutton = new Button(Texture.from("exitbutton"), 
        Texture.from("exitbuttondown"), Texture.from("exitcolbutton")),
        this.exitbutton.on("ButtonClicked", this.onButtonClick, this)
        this.exitbutton.scale.set(0.35);
        this.exitbutton.position.set(450,430);
        dialog.addChild(this.exitbutton);
  
        this.addChild(dialog);

        Keyboard.down.on("KeyB", this.onKeyB, this);
        Keyboard.up.on("KeyB", this.onKeyBUp, this);
        

    }
    
    private onButtonClick():void{
        console.log("my new button clicked!", this)}

   private onKeyB():void{
       console.log("apreté la b", this);
   }
   private onKeyBUp():void{
    console.log("solté la b", this);
}
    
    
}