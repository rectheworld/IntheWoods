


Crafty.c("Room", {
	init: function(){
		this.requires('2D, Canvas')
		.attr({
			w:Game.width,
			h:Game.height,
			x:0,
			y:0,
			z:-1 })
	},
});

Crafty.c("RoomExit", {
	init: function(){
		this.requires('2D, Canvas, Collision')
	}
});


Crafty.c("Fort1", {
	init: function(){
		this.requires('Room, spr_fort1_demo')
		.populate_items()


		Crafty.e('RoomExit, Color')
			.attr({x: 170,y: 270 ,w: 150, h: 120})
			.color('rgb(255,0,0)')
	},

	name: "Fort1",

	populate_items: function(){
		for (i in Game.room_inventory['Fort1']){
			//console.log(Game.room_inventory['Fort1'])
			this_obj = Game.room_inventory['Fort1']
			for(j in this_obj){
				this_item = this_obj[j]
				if(this_item.active == true){
					Crafty.e(this_item.name).attr({x:this_item.x, y:this_item.y})
				}
		}
		} // end i loop 
	}
})



Crafty.c("BigItem", {
	init: function(){
		this.requires('2D, Canvas, Mouse')
		.bind('Click', function(e){
			Game.menu_inventory[this.name].active = true
			Game.room_inventory[this.name] = false

			this.destroy()
			console.log(Game.Inventory)

			Game.Inventory.populate_inventory()
		})

	},
});



Crafty.c("Slingshot",{
	init: function(){
		this.requires('BigItem, big_slingshot')
		this.name = 'Slingshot'
	},
})


Crafty.c("Inventory", {
	init: function(){
		this.requires('2D, Canvas, Color')
		.attr({x:0, y:0, w:64, h: Game.screen_view.height, z: 1})
		.color('rgb(0,0,255)')
		.populate_inventory()

		console.log('1')
		
	},

	name: "Invet",


	populate_inventory: function(){
		current_y = 0
		for (i in Game.menu_inventory){
			
			this_obj = Game.menu_inventory
			//console.log(this_obj)

			for(j in this_obj){
				current_y = current_y + 64
				this_item = this_obj[j]

				if(this_item.active == true){
					Crafty.e(this_item.name).attr({x:0, y:current_y}).attr({z:1})
				}
			}
		} // end i loop 
	}
});



Crafty.c("Inventory_Item", {
	init: function(){
		this.requires('2D, Canvas, Mouse, Draggable')
		.attr({h:64, w:64, z:1})
		.bind('MouseDown', function(e){
			this.menu_x = this.x
			this.menu_y = this.y
			this.startDrag()
		})

		.bind('MouseUp', function(e){
			this.stopDrag()
			this.x = this.menu_x
			this.y = this.menu_y
			
		})


	},
});


Crafty.c("Slingshot_mini",{
	init: function(){
		this.requires('Inventory_Item, big_slingshot')	
	},
});


