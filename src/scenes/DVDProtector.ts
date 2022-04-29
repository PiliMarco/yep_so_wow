import {  AnimatedSprite, Container, Texture } from "pixi.js";
import { HEIGHT, WIDTH } from "..";
import { PhysicsContainer } from "../game/PhysicsContainer";
import { IUpdateable } from "../utils/IUpdateable";


export class DvdProtector extends Container implements IUpdateable
{
        private dvdprotector: AnimatedSprite; 
        private physdvd: PhysicsContainer;  

        constructor(){
        super();

        this.dvdprotector = new AnimatedSprite
        (
            [Texture.from("dvdimagen")],false);
           
            this.dvdprotector.play();
            this.dvdprotector.scale.set(0.5);
            this.dvdprotector.anchor.set(1,1);
            //this.dvdprotector.position.set(500,500);
            this.dvdprotector.animationSpeed = 0.17;
                    
    
        this.physdvd = new PhysicsContainer();  
        this.physdvd.speed.x = 170; 
        this.physdvd.speed.y = 0;
        this.physdvd.acceleration.y = 250;  
        this.addChild(this.physdvd);
       
        /*const auxZero = new Graphics
        auxZero.beginFill(0XFF0FF);
        auxZero.drawCircle(0,0,10);
        auxZero.endFill();*/
           
        this.physdvd.addChild(this.dvdprotector)
        //this.physdvd.addChild(auxZero);
  
}
     public update(deltaTime: number, deltaFrame:number): void
        {
          this.dvdprotector.update(deltaFrame)
          const dt = deltaTime /1000
         this.physdvd.update(dt);

         
             //LIMIT RIGHT:
         if (this.physdvd.x > WIDTH)
         { 
           this.physdvd.x = WIDTH;
           this.physdvd.speed.x = Math.abs(this.physdvd.speed.x) * -1;             
           this.dvdprotector.tint = 0xFF00FF
         }
           //LIMIT LEFT:
          else if (this.physdvd.x < 200)
         {
           this.physdvd.x = 200;
           this.physdvd.speed.x = Math.abs(this.physdvd.speed.x);           
           this.dvdprotector.tint = 0xFF0000
         } 
         //LIMIT VERTICAL:
         if (this.physdvd.y > HEIGHT)
         {
           this.physdvd.y = HEIGHT;
           this.physdvd.speed.y = -750 * Math.random();
           this.dvdprotector.tint = 0xFF0
         }
         //LIMIT ASHIBA:
         if (this.physdvd.y < 100)
         {
           this.physdvd.y = 100;
           this.physdvd.speed.y = Math.abs(this.physdvd.speed.y);
           this.dvdprotector.tint = 0x00ff00
         }
         
         
}
}