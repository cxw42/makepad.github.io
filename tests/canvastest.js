
var App = require('view').extend(function(proto){

	proto.nested = {
		Bg: require('shaders/rectshader').extend(function(proto){
		}),
		Text: require('shaders/sdffontshader').extend(function(proto){
			proto.font = require('fonts/ubuntu_monospace_256.sdffont')
		})
	}

	proto.ondraw = function(){
		var rnd = Math.random
		// lets go make a turtle
		//var dt = Date.now()		
		for(var i = 0 ; i < 500; i++){
			this.beginBg({
				x:(i%15)*100,
				y:Math.floor(i/15)*150,
				w:100,
				//h:100,
				borderColor:[rnd()*.5,rnd()*.5,rnd()*.5,1],
				padding:[20,5,5,5],
				borderWidth:[20,0,0,0],
				color:[rnd(),rnd(),rnd(),1],
				align:[0.,0.]
			})

				this.drawText({text:'HELLO WORLD SHOW TEXT WRAPPING',wrapping:'word',color:'black',margin:[0,0,0,0]})
				this.drawBg({w:15,h:15,margin:[0,0,0,10],color:'red'})
				this.beginBg({
					w:'100%',
					h:'50%',
					align:[0.5,0.5],
					padding:[5,5,5,5],
					margin:[0,0,0,0],
					color:'orange'
				})
					
				this.drawBg({w:30,h:30})
				//this.drawText({text:'Hi'})

				this.endBg()
				this.drawText({text:'Flowing around A B C',wrapping:'word',color:'black',margin:[0,0,0,0]})
				
			this.endBg()
		}
		//console.log(Date.now()-dt)

	}
})
App().runApp()