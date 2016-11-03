


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

	item_object_list:[],
	exit_object_list:[],


	populate_items: function(){
			this_obj = Game.room_inventory[this.name]
			for(j in this_obj){
				this_item = this_obj[j]
				if(this_item.active == true){
					element = Crafty.e(this_item.name).attr({x:this_item.x, y:this_item.y})
					this.item_object_list.push(element)
				}
		
		} // end i loop 
	},


	kill_room: function(){
		for (i in this.item_object_list){

			this.item_object_list[i].destroy()
		} // end i loop 

		for (i in this.exit_object_list){

			this.exit_object_list[i].destroy()
		} // end i loop 
		this.destroy()
	},

});






Crafty.c("RoomExit", {
	init: function(){
		this.requires('2D, Canvas, Collision, Mouse')
		.bind('Click', function(e){

			// if(this.destination == 'down_fort'){
			// 	Game.current_room.kill_room()
			// 	Game.current_room = Crafty.e('Below_Fort')
			// 	this.destination = null
			// }

			// else if(this.destination == 'Fort1'){
			// 	Game.current_room.kill_room()
			// 	Game.current_room = Crafty.e('Fort1')

			// }

			// else if(this.destination == 'Path_A'){
			// 	Game.current_room.kill_room()
			// 	Game.current_room = Crafty.e('Path_A')

			// }
			Game.current_room.kill_room()
			next_room = Game.edges[this.destination]
			Game.current_room = Crafty.e(next_room)

		})
	}
});


Crafty.c("Fort1", {
	init: function(){
		this.requires('Room, spr_fort1_demo')
		// .bind("changeRoom", function(){
		// 	console.log('in change room')
		// 	})
		.populate_items()

		to_down_fort = Crafty.e('RoomExit')
			.attr({x: 170,y: 270 ,w: 150, h: 120})
		to_down_fort.exitDirection = 'exit_down'
		to_down_fort.destination = 'to_down_fort'
		this.exit_object_list.push(to_down_fort)

		to_fort_zip = Crafty.e('RoomExit')
		.attr({x: 660,y: 0 ,w: 90, h: 490})
		to_fort_zip.exitDirection = 'exit_right'
		to_fort_zip.destination = 'to_fort_zip'
		this.exit_object_list.push(to_fort_zip)
	},

	//exits: {'to_down_fort': 'below_fort'},

	name: "Fort1",
	item_object_list:[],
	exit_object_list:[],

	// bind("changeRoom", function(){
	// 	console.log('in change room')
	// }),

	populate_items: function(){
		for (i in Game.room_inventory['Fort1']){
			//console.log(Game.room_inventory['Fort1'])
			this_obj = Game.room_inventory['Fort1']
			for(j in this_obj){
				this_item = this_obj[j]
				if(this_item.active == true){
					element = Crafty.e(this_item.name).attr({x:this_item.x, y:this_item.y})
					this.item_object_list.push(element)
				}
		}
		} // end i loop 
	},

	kill_room: function(){
		for (i in this.item_object_list){

			this.item_object_list[i].destroy()
		} // end i loop 

		for (i in this.exit_object_list){

			this.exit_object_list[i].destroy()
		} // end i loop 
		this.destroy()
	},
	
})


Crafty.c("Below_Fort", {
	init: function(){
		this.requires('Room, undertheFort_demo')
		// .bind("changeRoom", function(){
		// 	console.log('in change room')
		// 	})

		.populate_items()

		to_fort1 = Crafty.e('RoomExit')
			.attr({x: 600,y: 50 ,w: 80, h: 280})
		to_fort1.exitDirection = 'exit_up'
		to_fort1.destination = 'to_Fort1'
		this.exit_object_list.push(to_fort1)

		to_path_A = Crafty.e('RoomExit')
		.attr({x: 50,y: 125 ,w: 150, h: 150})
		to_path_A.exitDirection = 'exit_up'
		to_path_A.destination = 'to_Path_A'
		this.exit_object_list.push(to_path_A)

		to_fork_c = Crafty.e('RoomExit')
		.attr({x: 475,y: 130 ,w: 150, h: 150})
		to_fork_c.exitDirection = 'exit_right'
		to_fork_c.destination = 'to_fork_c'
		this.exit_object_list.push(to_fork_c)

	},


	name: "Below_Fort",

})


Crafty.c("Path_A", {
	init: function(){
		this.requires('Room, path_A_demo')
		// .bind("changeRoom", function(){
		// 	console.log('in change room')
		// 	})

		.populate_items()

		to_down_fort = Crafty.e('RoomExit')
			.attr({x: 51,y: 430 ,w: 700, h: 100})
		to_down_fort.exitDirection = 'exit_down'
		to_down_fort.destination = 'to_down_fort'
		this.exit_object_list.push(to_down_fort)

		to_fork_A = Crafty.e('RoomExit')
		.attr({x: 300, y:140 ,w: 440, h: 110})
		to_fork_A.exitDirection = 'exit_up'
		to_fork_A.destination = 'to_fork_A'
		this.exit_object_list.push(to_fork_A)

	},


	name: "Path_A",

})


Crafty.c("fork_A", {
	init: function(){
		this.requires('Room, fork1a_demo')
		// .bind("changeRoom", function(){
		// 	console.log('in change room')
		// 	})

		.populate_items()

		to_Path_A = Crafty.e('RoomExit')
		.attr({x: 51,y: 430 ,w: 700, h: 100})
		to_Path_A.exitDirection = 'exit_down'
		to_Path_A.destination = 'to_Path_A'
		this.exit_object_list.push(to_Path_A)

		to_fork_b = Crafty.e('RoomExit')
		.attr({x: 450,y: 130 ,w: 150, h: 150})
		to_fork_b.exitDirection = 'exit_right'
		to_fork_b.destination = 'to_fork_b'
		this.exit_object_list.push(to_fork_b)

	},


	name: "fork_A",

})

Crafty.c("fork_B", {
	init: function(){
		this.requires('Room, forkb_demo')
		// .bind("changeRoom", function(){
		// 	console.log('in change room')
		// 	})

		.populate_items()

		to_fork_A = Crafty.e('RoomExit')
		.attr({x: 51,y: 430 ,w: 700, h: 100})
		to_fork_A.exitDirection = 'exit_down'
		to_fork_A.destination = 'to_fork_A'
		this.exit_object_list.push(to_fork_A)

		to_path_b = Crafty.e('RoomExit')
		.attr({x: 360,y: 64 ,w: 150, h: 150})
		to_path_b.exitDirection = 'exit_up'
		to_path_b.destination = 'to_path_b'
		this.exit_object_list.push(to_path_b)

	},


	name: "fork_B",

})

Crafty.c("path_b", {
	init: function(){
		this.requires('Room, path_b_demo')
		// .bind("changeRoom", function(){
		// 	console.log('in change room')
		// 	})

		.populate_items()

		to_fork_b = Crafty.e('RoomExit')
		.attr({x: 51,y: 430 ,w: 700, h: 100})
		to_fork_b.exitDirection = 'exit_down'
		to_fork_b.destination = 'to_fork_b'
		this.exit_object_list.push(to_fork_b)

		to_fork_c = Crafty.e('RoomExit')
		.attr({x: 300,y: 50 ,w: 150, h: 150})
		to_fork_c.exitDirection = 'exit_up'
		to_fork_c.destination = 'to_fork_c'
		this.exit_object_list.push(to_fork_c)

	},


	name: "path_b",

})


Crafty.c("fork_c", {
	init: function(){
		this.requires('Room, fork_c_demo')
		// .bind("changeRoom", function(){
		// 	console.log('in change room')
		// 	})

		.populate_items()

		to_path_b = Crafty.e('RoomExit')
		.attr({x: 51,y: 300 ,w: 250, h: 300})
		to_path_b.exitDirection = 'exit_left'
		to_path_b.destination = 'to_path_b'
		this.exit_object_list.push(to_path_b)

		to_down_fort = Crafty.e('RoomExit')
		.attr({x: 550,y: 300 ,w: 200, h: 200})
		to_down_fort.exitDirection = 'exit_right'
		to_down_fort.destination = 'to_down_fort'
		this.exit_object_list.push(to_down_fort)

		to_path_c = Crafty.e('RoomExit')
		.attr({x: 300,y: 0 ,w: 150, h: 150})
		to_path_c.exitDirection = 'exit_right'
		to_path_c.destination = 'to_path_c'
		this.exit_object_list.push(to_path_c)

	},


	name: "fork_c",

})


Crafty.c("path_c", {
	init: function(){
		this.requires('Room, path_c_demo')
		// .bind("changeRoom", function(){
		// 	console.log('in change room')
		// 	})

		.populate_items()

		to_fork_c = Crafty.e('RoomExit')
		.attr({x: 51,y: 430 ,w: 700, h: 100})
		to_fork_c.exitDirection = 'exit_down'
		to_fork_c.destination = 'to_fork_c'
		this.exit_object_list.push(to_fork_c)

		to_bridge = Crafty.e('RoomExit')
		.attr({x: 250,y: 75 ,w: 200, h: 100})
		to_bridge.exitDirection = 'exit_up'
		to_bridge.destination = 'to_bridge'
		this.exit_object_list.push(to_bridge)

	},


	name: "path_c",

})


Crafty.c("bridge", {
	init: function(){
		this.requires('Room, bridge_demo')
		// .bind("changeRoom", function(){
		// 	console.log('in change room')
		// 	})

		.populate_items()

		to_path_c = Crafty.e('RoomExit')
		.attr({x: 51,y: 430 ,w: 300, h: 300})
		to_path_c.exitDirection = 'exit_left'
		to_path_c.destination = 'to_path_c'
		this.exit_object_list.push(to_path_c)

		to_river_edge = Crafty.e('RoomExit')
		.attr({x: 630,y: 310 ,w: 300, h: 300})
		to_river_edge.exitDirection = 'exit_right'
		to_river_edge.destination = 'to_river_edge'
		this.exit_object_list.push(to_river_edge)

	},


	name: "bridge",

})

Crafty.c("river_edge", {
	init: function(){
		this.requires('Room, riverEdge_demo')
		// .bind("changeRoom", function(){
		// 	console.log('in change room')
		// 	})

		.populate_items()

		to_bridge = Crafty.e('RoomExit')
		.attr({x: 51,y: 430 ,w: 700, h: 300})
		to_bridge.exitDirection = 'exit_down'
		to_bridge.destination = 'to_bridge'
		this.exit_object_list.push(to_bridge)

		to_well = Crafty.e('RoomExit')
		.attr({x: 595,y: 150 ,w: 150, h: 150})
		to_well.exitDirection = 'exit_up'
		to_well.destination = 'to_well'
		this.exit_object_list.push(to_well)

	},


	name: "river_edge",

})

Crafty.c("well", {
	init: function(){
		this.requires('Room, well_demo')
		// .bind("changeRoom", function(){
		// 	console.log('in change room')
		// 	})

		.populate_items()

		to_river_edge = Crafty.e('RoomExit')
		.attr({x: 50,y: 190 ,w: 50, h: 90})
		to_river_edge.exitDirection = 'exit_left'
		to_river_edge.destination = 'to_bridge'
		this.exit_object_list.push(to_river_edge)

		to_zip_bottom = Crafty.e('RoomExit')
		.attr({x: 50,y: 340 ,w: 50, h: 90})
		to_zip_bottom.exitDirection = 'exit_left'
		to_zip_bottom.destination = 'to_zip_bottom'
		this.exit_object_list.push(to_zip_bottom)

		to_well_zoom = Crafty.e('RoomExit')
		.attr({x: 290,y: 100 ,w: 150, h: 200})
		to_well_zoom.exitDirection = 'exit_up'
		to_well_zoom.destination = 'to_well_zoom'
		this.exit_object_list.push(to_well_zoom)

	},


	name: "river_edge",

})


Crafty.c("well_zoom", {
	init: function(){
		this.requires('Room, well_zoomin_demo')
		// .bind("changeRoom", function(){
		// 	console.log('in change room')
		// 	})

		.populate_items()

		to_well = Crafty.e('RoomExit')
		.attr({x: 51,y: 430 ,w: 700, h: 300})
		to_well.exitDirection = 'exit_down'
		to_well.destination = 'to_well'
		this.exit_object_list.push(to_well)


	},


	name: "well_zoom",

})





Crafty.c("fort_zipline", {
	init: function(){
		this.requires('Room, img_fort_zipline')
		// .bind("changeRoom", function(){
		// 	console.log('in change room')
		// 	})

		.populate_items()

		to_Fort1 = Crafty.e('RoomExit')
			.attr({x: 64,y: 0 ,w: 90, h: 490})
		to_Fort1.exitDirection = 'exit_left'
		to_Fort1.destination = 'to_Fort1'
		this.exit_object_list.push(to_Fort1)

	},


	name: "fort_zipline",

})

Crafty.c("zip_bottom", {
	init: function(){
		this.requires('Room, img_end_of_zip')
		// .bind("changeRoom", function(){
		// 	console.log('in change room')
		// 	})

		.populate_items()

	to_well = Crafty.e('RoomExit')
		.attr({x: 400,y: 70 ,w: 130, h: 100})
	to_well.exitDirection = 'exit_up'
	to_well.destination = 'to_well'
	this.exit_object_list.push(to_well)

	},


	name: "zip_bottom",

})


Crafty.c("BigItem", {
	init: function(){
		this.requires('2D, Canvas, Mouse')
		.bind('Click', function(e){
			Game.menu_inventory[this.name].active = true
			room_name = Game.menu_inventory[this.name].room_found
			Game.room_inventory[room_name][this.name].active = false

			this.destroy()

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


Crafty.c("ZipThing",{
	init: function(){
		this.requires('BigItem, big_ZipThing')
		this.name = 'ZipThing'
	},
})

Crafty.c("ZipThing_for_Zipping",{
	init: function(){
		this.requires('2D, Canvas, Mouse, big_ZipThing_for_zippings')
		.attr({x:510, y:35})
		this.name = 'ZipThing_for_Zipping'
		Game.room_inventory.fort_zipline[this.name].active = true
		Game.current_room.item_object_list.push(this)
		
		this.bind('Click', function(){
			Game.room_inventory.fort_zipline.ZipThing.active = false
			Game.room_inventory.fort_zipline.ZipThing_for_Zipping.active = false

			Game.room_inventory.zip_bottom.ZipThing_for_Zipping_bottom.active = true

			Game.current_room.to_zip_bottom = Crafty.e('RoomExit')
			Game.current_room.exit_object_list.push(Game.current_room.to_zip_bottom)
			Game.current_room.to_zip_bottom.attr({x: 510,y: 35 ,w: 90, h: 62})
			Game.current_room.to_zip_bottom.exitDirection = 'exit_left'
			Game.current_room.to_zip_bottom.destination = 'to_zip_bottom'


			
		})

	},
})

Crafty.c("ZipThing_for_Zipping_bottom",{
	init: function(){
		this.requires('BigItem, big_ZipThing_for_zippings')
		.origin('center')
		.roatation = 90
		this.name = 'ZipThing_for_Zipping_bottom'

	},
})


Crafty.c("Inventory", {
	init: function(){
		this.requires('2D, Canvas, Color')
		.attr({x:0, y:0, w:64, h: Game.screen_view.height, z: 1})
		.color('rgb(192,192,192)')
		.populate_inventory()
		
	},

	name: "Invet",
	//current_y: 0,
	current_items: [],
	slots: {'1': {y: 0, full: false},
			'2': {y: 64, full: false},
			'3': {y: 128, full: false},
			'4': {y: 192, full: false},
			'5': {y: 256, full: false},
			'6': {y: 320, full: false},
			'7': {y: 384, full:false},
			},

	populate_inventory: function(){


		for (i in Game.menu_inventory){

			this_item = Game.menu_inventory[i]

			if(this_item.active == true){
				//console.log(this.current_items)

				if(this.current_items.indexOf(this_item.name) == -1){

					console.log(this.slots)

					for(slot in this.slots){
						if(this.slots[slot].full === false){
							current_y = this.slots[slot].y
							this.slots[slot].full = true
							this_item.slot = slot

							break
						}
					}

				Crafty.e(this_item.name).attr({x:0, y:current_y}).attr({z:1})


				this.current_items.push(this_item.name)

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

			if(this.check_if_home(this)){
				
				var index = Game.Inventory.current_items.indexOf(this.name);
				if(index != -1) {
						Game.Inventory.current_items.splice(index, 1);
					}

				// need to clear the menu slot this was in
				slot_to_clear = Game.menu_inventory[this.menu_name].slot
				Game.menu_inventory[this.menu_name].slot = null
				Game.Inventory.slots[slot_to_clear].full = false 

				Crafty.e(this.big_name)
				this.destroy()
			}
			else{
				this.x = this.menu_x
				this.y = this.menu_y
			}
		})


	},

	check_if_home: function(this_obj){

		home_bool = false
		if(this_obj.home.room == Game.current_room.name){
			if(this_obj.x > this_obj.home.x & this_obj.x < this_obj.home.x + this_obj.home.w){
				if(this_obj.y > this_obj.home.y & this_obj.y < this_obj.home.y + this_obj.home.h){
					home_bool = true
					
				}
			}
		}

		return(home_bool)
	}
});


Crafty.c("Slingshot_mini",{
	init: function(){
		this.requires('Inventory_Item, little_slingshot')	
	},

	home: {room: null},
	name: 'Slingshot_mini',
	menu_name: "Slingshot",
});


Crafty.c("ZipThing_mini",{
	init: function(){
		this.requires('Inventory_Item, little_ZipThing')	
	},

	home: {room: 'fort_zipline', x : 480, y : 30, w: 150, h: 50},
	name: 'ZipThing_mini',
	big_name: 'ZipThing_for_Zipping',
	menu_name: "ZipThing",

});


Crafty.c("Clown",{
	init: function(){

	},

});


