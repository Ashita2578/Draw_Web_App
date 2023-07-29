quick_draw_data_set=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise ship","cup","diamond","dishwasher","diving board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck","dumbbell","ear", "elbow","elephant","envelope","eraser","eye","eyeglasses","face","fan","feather","fence","finger","fire hydrant","fireplace","firetruck","fish","flamingo","flashlight","flip flops","floor lamp","flower","flying saucer","foot","fork","frog","frying pan","garden","garden hose","giraffe","goatee","golf club","grapes","grass","guitar","hamburger","hammer","hand","harp","hat","headphones","hedgehog","helicopter","helmet","hexagon","hockey puck","hockey stick","horse","hospital","hot air balloon","hot dog","hot tub","hourglass","house","house plant","hurricane","ice cream","jacket","jail","kangaroo","key","keyboard","knee","knife","ladder","lantern","laptop","leaf","leg","light bulb","lighter","lighthouse","lightning","line","lion","lipstick","lobster","lollipop","mailbox","map","marker","matches","megaphone","mermaid","microphone","microwave","monkey","moon","mosquito","motorbike","mountain","mouse","moustache","mouth","mug","mushroom","nail","necklace","nose","ocean","octagon","octopus","onion","oven","owl","paintbrush","paint can","palm tree","panda","pants","paper clip","parachute","parrot","passport","peanut","pear","peas","pencil","penguin","piano","pickup truck","picture frame","pig","pillow","pineapple","pizza","pliers","police car","pond","pool","popsicle","postcard","potato","power outlet","purse","rabbit","raccoon","radio","rain","rainbow","rake","remote control","rhinoceros","rifle","river","roller coaster","rollerskates","sailboat","sandwich","saw","saxophone","school bus","scissors","scorpion","screwdriver","sea turtle","see saw","shark","sheep","shoe","shorts","shovel","sink","skateboard","skull","skyscraper","sleeping bag","smiley face","snail","snake","snorkel","snowflake","snowman","soccer ball","sock","speedboat","spider","spoon","spreadsheet","square","squiggle","squirrel","stairs","star","steak","stereo","stethoscope","stitches","stop sign","stove","strawberry","streetlight","string bean","submarine","suitcase","sun","swan","sweater","swingset","sword","syringe","table","teapot","teddy-bear","telephone","television","tennis racquet","tent","The Eiffel Tower","The Great Wall of China","The Mona Lisa","tiger","toaster","toe","toilet","tooth","toothbrush","toothpaste","tornado","tractor","traffic light","train","tree","triangle","trombone","truck","trumpet","tshirt","umbrella","underwear","van","vase","violin","washing machine","watermelon","waterslide","whale","wheel","windmill","wine bottle","wine glass","wristwatch","yoga","zebra","zigzag"]
var score=0;
document.getElementById("score").innerHTML=score;
function check(){
    accuracy= document.getElementById("Confidence").value;
    if (accuracy >= 50){
        score=score+1;
    }
}
function setup()    {
    canvas= createCanvas(280,320);
    background("white");
    canvas.center();
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
}
function clearCanvas()    {
    background("white");
}
function preload()  {
    classifier= ml5.imageClassifier ('DoodleNet');
}
function draw() {
    strokeWeight(5);
    stroke(0);
    if(mouseIsPressed)  {
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function classifyCanvas()  {
    classifier.classify(canvas,gotResult);
}
function gotResult (error, results) {
    if (error)  {
        console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML='Label:'+ results[0].label;
    document.getElementById('Confidence').innerHTML='Confidence'+ Math.round(results[0].confidence*100)+ '%';
    utterThis = new SpeechSynthesisUtterance (results[0].label);
    synth.speak(utterThis);
}


var countDown = new Date("jan 1, 2027 12:12:50").getTime();

//update the count down in every 1 second
var update = setInterval(function () {

   // get the today's date and time
   var now = new Date().getTime();
 
   //find the difference b/w countDown and now
   var diff = countDown - now;
 
   //now we are calculating time in days, hrs, minutes, and seconds.
 
   var seconds = Math.floor((diff % (1000 * 60)) / 1000);
 
   //now output the result in an element with id ="time"
   document.getElementById("time").innerHTML =
     "Seconds: "+seconds ;
   if (diff < 0) {
      clearInterval(update);
      document.getElementById("time").innerHTML = "Expired";
   }
}, 1000);