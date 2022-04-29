import { AnimatedSprite, Container, Graphics, Texture} from "pixi.js";
import { HEIGHT, WIDTH } from "..";
import { PhysicsContainer } from "../game/PhysicsContainer";
import { IUpdateable } from "../utils/IUpdateable";
//import { Keyboard } from "../utils/Keyboard";

export class SceneSpaceManTicker extends Container implements IUpdateable
{
   
     private spacemananimated: AnimatedSprite;
     private physpaceman: PhysicsContainer;

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
    this.spacemananimated.anchor.set(1,1);
    //this.spacemananimated.position.set(1000,600);
    this.spacemananimated.animationSpeed = 0.17;
    
    this.physpaceman = new PhysicsContainer();  
    this.physpaceman.speed.x = 170; 
    this.physpaceman.speed.y = 0;
    this.physpaceman.acceleration.y = 250;  
    this.addChild(this.physpaceman);
   
    const auxZero = new Graphics
    auxZero.beginFill(0XFF0FF);
    auxZero.drawCircle(0,0,10);
    auxZero.endFill();

    this.physpaceman.addChild(this.spacemananimated)
    this.physpaceman.addChild(auxZero);

    }
    public update(deltaTime: number, deltaFrame: number): void
        {
          this.spacemananimated.update(deltaFrame);
                             
            /*this.spacemananimated.play();
            this.spacemananimated.x +=10; 
            
            
            if(Keyboard.state.get("KeyA")) 
         this.spacemananimated.texture = Texture.from("spacemanrun1");
         this.spacemananimated.x = 50;} */
         const dt = deltaTime /1000
         this.physpaceman.update(dt);

         if (this.physpaceman.x > WIDTH)
         { 
           this.physpaceman.x = WIDTH;
           this.physpaceman.speed.x = Math.abs(this.physpaceman.speed.x) * -1;
           this.physpaceman.scale.x = -1;
           //this.spacemananimated.tint =
         } else if (this.physpaceman.x < 0)
         {
           this.physpaceman.x = 0;
           this.physpaceman.speed.x = Math.abs(this.physpaceman.speed.x);
           this.physpaceman.scale.x = 1;
         } if (this.physpaceman.y > HEIGHT)
         {
           this.physpaceman.y = HEIGHT;
           this.physpaceman.speed.y = -500 * Math.random();
         }
         
       }
                  
  
}