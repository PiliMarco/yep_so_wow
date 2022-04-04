import { Container, Sprite } from "pixi.js";

export class GanasteUi extends Container {
    constructor(){
        super();

        const terminación1: Sprite = Sprite.from("terminación1");
        const terminación2: Sprite = Sprite.from("terminación2");
        const ganaste: Sprite = Sprite.from("ganaste");
        const next: Sprite = Sprite.from("next");
        const restart: Sprite = Sprite.from("restart");
        const estrella: Sprite = Sprite.from("estrella");
        const estrellas: Sprite = Sprite.from("estrellas");
        const tabla: Sprite = Sprite.from("tabla");

this.addChild(terminación1, terminación2, ganaste, next, restart, estrella, estrellas, tabla);

    }
}