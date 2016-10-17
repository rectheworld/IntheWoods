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
	  }
	 },

 	//Inventory: Crafty.e('Inventory'),

	menu_inventory:{
	    'Slingshot':
	    {'name': 'Slingshot_mini',
	    'active': false}
	  
	 },

	start: function() {
		// Start ze Crafty
		Crafty.init(Game.screen_view.width, Game.screen_view.height);
		
		Crafty.scene('Loading');
	}		
};