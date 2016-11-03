Game = {
	width: 93,
	height: 66,

	screen_view: {
	width: 24 * 32,
	height: 16 * 32
	},

	room_inventory:{
	  "Fort1":{
	    'Slingshot':
	    {'name': 'Slingshot',
	    'active': true,
	    'x': 495,
	    'y': 326}
	  },
	  'fort_zipline':{
	  	'ZipThing':
	  	{'name':'ZipThing',
	  	'active':true,
	  	'x': 588,
	  	'y': 380,
	  	},
	  	'ZipThing_for_Zipping':
	  	{'name':'ZipThing_for_Zipping',
	  	'active':false,
	  	'x': 510,
	  	'y': 35
	  	},
	  },
	  'zip_bottom':{
	  	'ZipThing_for_Zipping_bottom':
	  	{'name':'ZipThing_for_Zipping_bottom',
	  	'active':true,
	  	'x': 500,
	  	'y': 0
	  	},	
	  }
	 },

 	//Inventory: Crafty.e('Inventory'),

	menu_inventory:{
	    'Slingshot':
		    {'name': 'Slingshot_mini',
		    'active': false,
			'room_found': "Fort1",
			'slot': null},
		'ZipThing':{
			'name':'ZipThing_mini',
			'active': false,
			'room_found' : 'fort_zipline',
			'slot': null},
		'ZipThing_for_Zipping_bottom':{
			'name':'ZipThing_mini',
			'active': false,
			'room_found' : 'zip_bottom',
			'slot': null
		}
	 },

	 edges: {
 		"to_down_fort": "Below_Fort",
 		"to_Path_A" : "Path_A",
 		"to_Fort1": "Fort1",
 		"to_fort_zip": "fort_zipline",
 		"to_zip_bottom": "zip_bottom",
 		"to_fork_A": "fork_A",
 		"to_fork_b": "fork_B",
 		"to_path_b": "path_b",
 		"to_fork_c": "fork_c",
 		"to_path_c": "path_c",
 		"to_bridge": "bridge",
 		"to_river_edge": "river_edge",
 		"to_well": "well",
 		"to_well_zoom": "well_zoom"
	 },

	 maps: {
	 	"Below_Fort": ['Path_A', "fork_c"],
	 	"Path_A":["Below_Fort", "fork_A"],
	 	"fork_A":["path_b"],
	 	"path_b" : ["fork_A", "fork_c"],
	 	"fork_c" : ["path_b", "path_c", "Below_Fort"],
	 	"path_c" :["fork_c", "bridge"],
	 	"bridge" : ["river_edge","path_c"],
	 	"river_edge": ["bridge", "well"] 
	 },


	start: function() {
		// Start ze Crafty
		Crafty.init(Game.screen_view.width, Game.screen_view.height);
		
		Crafty.scene('Loading');
	}		
};