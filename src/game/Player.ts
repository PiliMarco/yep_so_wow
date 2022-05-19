import { AnimatedSprite, Graphics, Texture } from "pixi.js";
import { Keyboard } from "../utils/Keyboard";
import { PhysicsContainer } from "./PhysicsContainer";

export class Player extends PhysicsContainer
{
    spacemananimated: AnimatedSprite;
    private static readonly GRAVITY = 500;
    private static readonly MOVE_SPEED = 100;
    public canJump = true;
    private hitbox: Graphics;

    constructor(){
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
      
     
      const auxZero = new Graphics
      auxZero.beginFill(0XFF0FF);
      auxZero.drawCircle(0,0,10);
      auxZero.endFill();
  
      this.hitbox = new Graphics();
      this.hitbox.beginFill(0xFF00FF, 0.3);
      this.hitbox.drawRect(0,0,36,74);
      this.hitbox.endFill();
      this.hitbox.x = -36;
      this.hitbox.y = -74;

      this.addChild(this.spacemananimated)
      this.addChild(auxZero);
      this.addChild(this.hitbox);
    
      this.acceleration.y = Player.GRAVITY;
    }
    public override update(deltaMS: number){
             super.update(deltaMS/1000);
             this.spacemananimated.update(deltaMS/(1000/60));
             if (Keyboard.state.get("ArrowRight"))
             {
                 this.speed.x = Player.MOVE_SPEED;
                 this.spacemananimated.scale.x = 1.5;
             }
             else if(Keyboard.state.get("ArrowLeft"))
             {
                 this.speed.x = -Player.MOVE_SPEED
                 this.spacemananimated.scale.x = -1.5;
             }
             else {this.speed.x = 0}

            /* if (Keyboard.state.get("ArrowDown"))
             {
                 this.speed.y = Player.MOVE_SPEED;
             }
             else if(Keyboard.state.get("ArrowUp"))
             {
                 this.speed.y = -Player.MOVE_SPEED
             }
             else {this.speed.y = 0} ESTO LO DEJO COMO POSIBILIDAD A FUTURO*/

             if (Keyboard.state.get("ArrowUp") && this.canJump)
             {
                 //this.canJump = false;
                 this.speed.y = -400;
             }
                
             
    }
}