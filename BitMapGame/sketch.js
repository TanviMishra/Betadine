let aspectRatio = 2.35;
let screenWidth = 400;
let groundLevel = 40;
let sceneNumber = 0;
let startButton;
let tempSceneNumber=0;
let numberOfStrawberries=5;
let StrawberryXPos=1;
let StrawberryYPos=0;
let StrawberryCount=0;
let strawberryArr=[];
let accelerateX = 10;
let accelerateY = 0;
let charXPos = 0;
let charYPos =0 ;
let charYPosBaseline =screenWidth-60 ;
let StrawberryHeightArr=[charYPosBaseline, charYPosBaseline-120,charYPosBaseline-240]
let startStawberry = 0;
let stopStawberry = numberOfStrawberries;
let previousSceneNumber=1;
let index=0;
tempXpos =0;
tempYpos =0;
//storyArray=[[],["","one,one","one,two","one,three","one,four","one,five"],["","two,one","two,two","two,three","two,four","two,five"],["","three,one","three,two","three,three","three,four","three,five"],["","four,one","four,two","four,three","four,four","four,five"],["","five,one","five,two","five,three","five,four","five,five"],["","six,one","six,two","six,three","six,four","six,five"]];
storyArray= [[],['','She spent her days in her head', 'Lost to the world around her', 'Burdened by herself', 'She walked through life', 'Oblivious to those surrounding her'], ['','Unknown places were ventured','New fears were discovered','Doubts swarmed','Swallowing her up slowly','Till she was indistinguishable'], ['','She ran ahead', 'flustered, Scrambling for times before', 'Nostalgia can be cruel', 'and its cruelty left her', 'on loop'],['','She jumped and danced', 'But', 'there weren’t as many joys','In the world', 'As in her head'], ['','She longed for meaning', 'Longed for purpose', 'Longed for connection', 'And so,','Onto the long road she set forth again.']]
var charSprite;
var strawberrySprite;
var pathSprite;
var collectStrawberries;
var collectPath;
count=0;
dispArray=[]
let bgSound;
let music = "null";
function preload() {
  BG0= loadImage('../BG0.png');
  BG1= loadImage('../BG1.png');
  BG2= loadImage('../BG2.png');
  BG3= loadImage('../BG3.png');
  BG4= loadImage('../BG4.png');
  BG5= loadImage('../BG5.png');
  BG6= loadImage('../BG6.png');
  charSprite = createSprite(-50, -50);
  charSprite.addAnimation('normal','../G1.png','../G1.png'); 
  music ="https://tanvimishra.github.io/PUFY1225-Digital_Craft/08-You're My Best Friend.mp3";
  sound = loadSound(music);
  music = "'"+music+"'"; 
}
function setup() {
  createCanvas(aspectRatio*screenWidth,screenWidth);
  noStroke();  
  collectStrawberries = new Group();
  collectPath = new Group();
}
function draw() {
  switch(sceneNumber){
    case 0: scene0();
            break
    case 1: scene1();
            break
    case 2: scene2();
            break
    case 3: scene3();
            break
    case 4: scene4();
            break            
    case 5: scene5();
            break
    case 6: scene6();
            break   
    case 7: scene7();
            break           
  }
}
function scene0(){ //instruction page
  image(BG0, 0, 0);
  textSize(32);
  fill('#D4656E');
  text('Game Name', 10, 30);
  text('Instructions:', 100, 70);
  textSize(25);
  text('Character, Beta, traverses landscapes collecting', 100, 130);
  text('strawberries and revealing their story', 100, 170);
  text('Move around pressing up, down and right arrow', 100, 230);
  text('Just dont look back.', 100, 270);
  text('Press any key to START', width-380, 330);
  
  function toggleSound() {
  if (sound.isPlaying() ){
    sound.stop();
  } else {
    sound.play();
  }
}
  // if(keyIsPressed== true){
//      changeScene(1);
//      objectDisplay(2,1)
//   }
}
function scene1(){ //city page
  image(BG1, 0, 0);
  characterMovements() ;  
}
function scene2(){ //forest 1 page
  image(BG2, 0, 0);
  characterMovements() ;  
}
function scene3(){ //forest 2 page
  image(BG3, 0, 0);
  characterMovements() ;
}
function scene4(){ //ocean 1 page
  image(BG4, 0, 0);
  characterMovements() ;
}
function scene5(){ //ocean 2 page
  image(BG5, 0, 0);
  characterMovements() ;
}
function scene6(){ //mountain page
  image(BG6, 0, 0);
  characterMovements() ;
}
function scene7(){ //mountain page
  image(BG0, 0, 0);
  textSize(32);
  fill('#D4656E');
  text('Thanks for listening', 10, 30);
}
function displayStrawberryCount(){
	fill('#fcc8a3');
	rect(width-210,40,150,50)
  	fill('#d4656e');
  	textSize(15);
  	text('Strawberry count:', width-200, 80);
  	text(StrawberryCount, width-80, 80);
}
function changeScene(tempSceneNumber){
  sceneNumber=tempSceneNumber;
} 
function characterMovements(){
  if (keyIsDown(UP_ARROW) && charYPos>100) {
    charYPos -= 3;
    charXPos+= 1;
  } 
  else if(keyIsDown(DOWN_ARROW) && charYPos<300){
    charYPos+= 3;
    charXPos+= 1;
  }
  else if(keyIsDown(RIGHT_ARROW) ){
    charYPos+= 0;
    charXPos+= 3;
  }
  else {
    charYPos = 300;
    charXPos+=3;
  }
  
  CollisionDetection();
  character(charXPos,charYPos);
  charReset();
}
function character(xx,yy){
   charSprite.position.x=xx;
   charSprite.position.y=yy;
   drawSprites();
}
function charReset(){
	if(charXPos>width){
   	  sceneNumber++;
   	  changeScene(sceneNumber)
   	  charXPos=0
      objectDisplay(1,1)
  }
}
function CollisionDetection(){
	charSprite.overlap(collectStrawberries, stawberryCollect);
	//pathReset();
	printStory();
}
function stawberryCollect(collector, collected){
  StrawberryCount+=1
  collected.remove(); 
  printStory()
}
function printStory(){
	push();
	fill('#D4656E');
	if(sceneNumber==4 || sceneNumber==5){
		fill(255);
	}
	textSize(20);
	if (previousSceneNumber!=sceneNumber){
		previousSceneNumber= sceneNumber;
		StrawberryCount=0;
	}
	text(storyArray[previousSceneNumber-1][StrawberryCount%6],300, 380);
	pop();
}
function pathReset(){
// 	if (charSprite.bounce(pathSprite)){
// 		charSprite.position.x=200
// 		charYPosBaseline = charSprite.position.x
// 	}
// 	else
// 	charYPosBaseline = screenWidth-60
}
function objectDisplay(switchState,stopLoop){
	switch(switchState){
		case 0:
			break
		case 1:
		if(stopLoop==1){
			if(sceneNumber >2){
			collectStrawberries.removeSprites();
			collectPath.removeSprites(); 
			}
			for(var j=startStawberry; j<stopStawberry; j++){
					tempXpos = (j%8)*200 + 100;
					tempYpos = random(charYPosBaseline,charYPosBaseline-240);
    				var strawberry = createSprite(tempXpos,tempYpos);
    				strawberry.addAnimation('normal', '../Strawberry.png');
    				collectStrawberries.add(strawberry);
    				stopLoop=0;			
    				}
    			}
    			startStawberry=stopStawberry;
    			stopStawberry+=8
    			//break
    	case 2: 
    	if(sceneNumber == 4||sceneNumber == 5){
			for(var j=0; j<6; j++){
					tempXpos = (j%8)*200 + 100;
					tempYpos = random(charYPosBaseline,charYPosBaseline-240);
    				var path = createSprite(tempXpos,tempYpos);
    				path.addAnimation('normal', '../path.png');
    				collectPath.add(path);		
    				}
    	}
 	
     	break
  }
  
}

