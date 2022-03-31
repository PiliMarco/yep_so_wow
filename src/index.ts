import { Application, Loader} from 'pixi.js'
import { assets } from './assets';
import { GatiJoy } from './GatilloWithJoy';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});
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
	
	
	const gatilloWithJoy : GatiJoy = new GatiJoy();
	

gatilloWithJoy.position.set(400,200);
gatilloWithJoy.scale.set(0.5,0.5);

app.stage.addChild(gatilloWithJoy);
});
Loader.shared.load();

