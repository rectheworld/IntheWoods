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
			'room_found': "Fort1"},
		'ZipThing':{
			'name':'ZipThing_mini',
			'active': false,
			'room_found' : 'fort_zipline'
		},
		'ZipThing_for_Zipping_bottom':{
			'name':'ZipThing_mini',
			'active': false,
			'room_found' : 'zip_bottom'
		}
	 },

	 edges: {
 		"to_down_fort": "Below_Fort",
 		"to_Path_A" : "Path_A",
 		"to_Fort1": "Fort1",
 		"to_fort_zip": "fort_zipline",
 		"to_zip_bottom": "zip_bottom"
	 },


	start: function() {
		// Start ze Crafty
		Crafty.init(Game.screen_view.width, Game.screen_view.height);
		
		Crafty.scene('Loading');
	}		
};