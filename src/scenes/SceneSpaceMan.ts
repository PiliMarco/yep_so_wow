import { AnimatedSprite, Container, Texture} from "pixi.js";
import { IUpdateable } from "../utils/IUpdateable";
import { Keyboard } from "../utils/Keyboard";

//import { Keyboard } from "../utils/Keyboard";

export class SceneSpaceManTicker extends Container implements IUpdateable
{
   
     private spacemananimated: AnimatedSprite;

    constructor()
    {
      super();  

      this.spacemananimated = new AnimatedSprite(
          [  
            Texture.from("spacemanrun1"),   
         Texture.from("spacemanrun2"),
         Texture.from("spacemanrun3")
          ], false
                   
      );
    
    this.spacemananimated.play()
    this.spacemananimated.scale.set(1.5);
    this.spacemananimated.position.set(1000,600);
    this.spacemananimated.animationSpeed = 0.17;
    
    this.addChild(this.spacemananimated);
    

    }
    public update(_deltaTime: number, deltaFrame: number): void
        {
          this.spacemananimated.update(deltaFrame);
           
                  
            this.spacemananimated.play();
            this.spacemananimated.x +=10; 
            
            if(Keyboard.state.get("KeyA"))
            {this.spacemananimated.stop();
            
         this.spacemananimated.texture = Texture.from("spacemanrun1");
         this.spacemananimated.x = 50;}

       }
                  
  
}