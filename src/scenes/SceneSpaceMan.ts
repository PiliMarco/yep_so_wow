import { AnimatedSprite, Container, Texture } from "pixi.js";

export class SceneSpaceMan extends Container{
    constructor(){
      super();  

      const spacemananimated: AnimatedSprite = new AnimatedSprite(
          [  
            Texture.from("spacemanrun1"),   
         Texture.from("spacemanrun2"),
         Texture.from("spacemanrun3")
          ], true
          
      )
spacemananimated.play();
this.scale.set(1.5);
this.position.set(50,600);
this.addChild(spacemananimated)
spacemananimated.animationSpeed = 0.1;
    }
    
    


}