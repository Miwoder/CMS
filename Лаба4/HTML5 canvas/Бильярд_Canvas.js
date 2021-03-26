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


(lib.circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FFFF").s().p("Aj4D5QhnhnAAiSQAAiRBnhnQBnhnCRAAQCSAABnBnQBnBnAACRQAACShnBnQhnBniSAAQiRAAhnhng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.circle, new cjs.Rectangle(-35.2,-35.2,70.4,70.4), null);


// stage content:
(lib.Бильярд_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.circle.addEventListener("tick",f1.bind(this));
		
		var i = 1;
		function anim(args) {
			if (i <= 20) {
				if (this.circle.x < 525)
					this.circle.x += 25;
				if (this.circle.y > 0)
					this.circle.y -= 10;
				i++;
			}
			if (i > 20 && i <= 40) {
				if (this.circle.x > 50)
					this.circle.x -= 16;
				if (this.circle.y > 0)
					this.circle.y -= 8;
				i++;
			}
			if (i > 40 && i <= 60) {
				if (this.circle.x > 0)
					this.circle.x -= 10;
				if (this.circle.y <400)
					this.circle.y += 20;
				i++;
			}
			if (i > 60) {
				this.circle.x = 0;
				this.circle.y = 350;
				i = 0;
			}
		}*/
		this.circle.addEventListener("tick",f1.bind(this));
		
		var kx = 4;
		var ky = 4;
		
		function f1(args)
		
		{
		this.circle.x += 2*kx;
		this.circle.y += 2*ky;
		if(this.circle.x > 500) kx = -4;
			if(this.circle.x < 0) kx =4;
		if (this.circle.y > 400) ky = -4;
			if(this.circle.y <0) ky = 4;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.circle = new lib.circle();
	this.circle.parent = this;
	this.circle.setTransform(38.4,363.2);

	this.timeline.addTween(cjs.Tween.get(this.circle).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(278.2,528,70.4,70.4);
// library properties:
lib.properties = {
	id: '1630DD849F1FD84AA789F3796803488E',
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
an.compositions['1630DD849F1FD84AA789F3796803488E'] = {
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