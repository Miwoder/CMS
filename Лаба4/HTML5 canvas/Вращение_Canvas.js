(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AJYAAQAAHGiwFBQivFBj5AAQj4AAiwlBQivlBAAnGQAAnFCvlBQCwlBD4AAQD5AACvFBQCwFBAAHFg");
	this.shape.setTransform(-3,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmoMHQivlBAAnGQAAnFCvlBQCwlBD4AAQD4AACwFBQCwFBAAHFQAAHGiwFBQiwFBj4AAQj4AAiwlBg");
	this.shape_1.setTransform(-3,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkVG1Qh0h0AAijQAAiiBxkdQBxkdCjAYQCiAZB2EFQB2EFAAChQAACjh0B0QhzBzijAAQiiAAhzhzg");
	this.shape.setTransform(0,-15.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-39.4,-71.1,78.8,110.5), null);


// stage content:
(lib.Вращение_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function Left(args){
			this.elem1.rotation-=10;
		}
		this.btn1.addEventListener("click", Left.bind(this));
		
		function Right(args){
			this.elem1.rotation+=10;
		}
		this.btn2.addEventListener("click", Right.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.btn2 = new lib.Символ2();
	this.btn2.parent = this;
	this.btn2.setTransform(206.6,102.3,0.347,0.347);
	new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib.Символ2(), 3);

	this.btn1 = new lib.Символ2();
	this.btn1.parent = this;
	this.btn1.setTransform(139,102.3,0.347,0.347);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.Символ2(), 3);

	this.elem1 = new lib.Символ1();
	this.elem1.parent = this;
	this.elem1.setTransform(169.5,107.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.elem1},{t:this.btn1},{t:this.btn2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(391.2,236.7,111.2,110.5);
// library properties:
lib.properties = {
	id: 'C6A7307D98228A448AACAB867316F539',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C6A7307D98228A448AACAB867316F539'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;