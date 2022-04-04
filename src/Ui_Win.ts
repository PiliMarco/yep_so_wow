import { Container, Sprite } from "pixi.js";

export class GanasteUi extends Container {
    constructor ()
    {
        super ();

        const terminación1: Sprite = Sprite.from("terminación1");
        const terminación2: Sprite = Sprite.from("terminación2");
        const next: Sprite = Sprite.from("next");
        const restart: Sprite = Sprite.from("restart");
        //NO LA USO AL FINAL.const estrella: Sprite = Sprite.from("estrella");
        const estrellas: Sprite = Sprite.from("estrellas");
        const tabla: Sprite = Sprite.from("tabla");
        const ganaste: Sprite = Sprite.from("ganaste");

        ganaste.scale.set(0.5,0.5);
        tabla.scale.set(0.5,0.4);
        estrellas.scale.set(0.4,0.4);
        terminación1.scale.set(0.3,0.3);
        terminación2.scale.set(0.3,0.3);
        next.scale.set(0.5,0.5);
        restart.scale.set(0.5,0.5);

        tabla.position.set(0,100);
        estrellas.position.set(100,300)
        next.position.set(300,460)
        restart.position.set(50,460)
        terminación1.position.set(7,50)
        terminación2.position.set(7,570);



this.addChild(tabla, terminación1, terminación2, ganaste, next, restart, estrellas);
}}