import { Container } from "pixi.js";
import { HEIGHT, WIDTH } from "..";

import { Player } from "../game/Player";
import { IUpdateable } from "../utils/IUpdateable";
//import { Keyboard } from "../utils/Keyboard";

export class SceneSpaceManTicker extends Container implements IUpdateable
{
   
     private playerSpaceMan: Player;

    constructor()
    {
      super();  
   
    this.playerSpaceMan = new Player;
    this.addChild(this.playerSpaceMan);
    }
    public update(deltaTime: number, _deltaFrame: number): void
        {
          this.playerSpaceMan.update(deltaTime);
                             
            /*this.spacemananimated.play();
            this.spacemananimated.x +=10; 
            
            
            if(Keyboard.state.get("KeyA")) 
         this.spacemananimated.texture = Texture.from("spacemanrun1");
         this.spacemananimated.x = 50;} */
         const dt = deltaTime /1000
         this.playerSpaceMan.update(dt);

         if (this.playerSpaceMan.x > WIDTH)
         { 
           this.playerSpaceMan.x = WIDTH;
                      //this.spacemananimated.tint =
         } else if (this.playerSpaceMan.x < 0)
         {
           this.playerSpaceMan.x = 0;
           
         } if (this.playerSpaceMan.y > HEIGHT)
         {
           this.playerSpaceMan.y = HEIGHT;
           this.playerSpaceMan.canJump = true;
         }
         
       }
                  
  
}