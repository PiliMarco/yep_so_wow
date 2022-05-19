import { Application, Loader, Ticker} from 'pixi.js'
import { assets } from './assets';
//import { DvdProtector } from './scenes/dvdprotector';
import { SceneSpaceManTicker } from './scenes/SceneSpaceManTicker';
//import { SceneSpaceManTicker } from './scenes/SceneSpaceMan';
//import { Scene } from './scenes/Scene';
//import { UiMenu } from './scenes/UI_Menu';
import { Keyboard } from './utils/Keyboard';

export const WIDTH = 1280;
export const HEIGHT = 720;

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: WIDTH,
	height: HEIGHT
});
Keyboard.initialize();

window.addEventListener("resize", ()=>{
	console.log("resized");
	
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaleY);
	
	const gameWidth = app.screen.width * scale;
	const gameHeight = app.screen.height * scale;

	const marginHorizontal = (window.innerWidth - gameWidth) / 2;
	const marginVertical = (window.innerHeight - gameHeight) / 2;
	
	app.view.style.width = gameWidth + "px";
	app.view.style.height = gameHeight + "px";

	app.view.style.marginLeft = marginHorizontal + "px";
	app.view.style.marginRight = marginHorizontal + "px";

	app.view.style.marginTop = marginVertical + "px";
	app.view.style.marginBottom = marginVertical + "px";


})
window.dispatchEvent(new Event("resize"));


Loader.shared.add(assets);
Loader.shared.onComplete.add(()=>{
	/*const myScene = new Scene();
	app.stage.addChild(myScene);
	const myUiMenu = new UiMenu();
	app.stage.addChild(myUiMenu);*/

	const mySpaceManScene = new SceneSpaceManTicker();
	app.stage.addChild(mySpaceManScene);
	Ticker.shared.add(function(deltaFrame){
		mySpaceManScene.update(Ticker.shared.deltaMS, deltaFrame);
		
	
	}) 
	/*const DVDScene = new DvdProtector();
	app.stage.addChild(DVDScene);
	
    Ticker.shared.add(function(deltaFrame){
		DVDScene.update(Ticker.shared.deltaMS, deltaFrame);})*/	
	
});
Loader.shared.load();

