Crafty.scene('Game', function() {
  // A 2D arry to keep track of all occupied tiles
  //Crafty.background('rgb(255,0,0)');

  Game.current_room = Crafty.e('Fort1').attr({x:0,y:0})


  Game.Inventory=Crafty.e('Inventory')

  function getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
  }

  var canvas = document.getElementById("cr-stage");

  ///Pointer?
  pointer = Crafty.e('2D, Canvas, SpriteAnimation, normal_curser, Collision').attr({z:1})
  .reel('normal_curser',1000, 0,1,1)
  .reel('select_curser',1000, 1,1,1)
  .reel('exit_left',1000, 0,0,1)
  .reel('exit_down',1000, 1,0,1)
  .reel('exit_right',1000, 2,0,1)
  .reel('exit_up',1000, 3,0,1)

  pointer.bind('EnterFrame', function(){
    pointer.pickCurser()
  })

  pointer.pickCurser = function(){
    if(this.hit('BigItem') != false || this.hit('Inventory_Item') != false){
      this.animate('select_curser',-1)
    }else if(this.hit('RoomExit') != false){
      exit_direction = this.hit('RoomExit')[0].obj.exitDirection

      this.animate(exit_direction, 1)

    }
    else{
      this.animate('normal_curser',-1)      
    }

    return(this)
  }

  Crafty.addEvent(pointer, Crafty.stage.elem, 'mousemove', function(e){
    var pos = getMousePos(canvas, e);
      pointer.x = pos.x - pointer._w/2
      pointer.y = pos.y - pointer._h/2

      document.getElementById('_position').innerHTML = String(Math.round(pointer.x)).concat(" ,").concat(String(Math.round(pointer.y)))

  })

  Crafty.stage.elem.style.cursor = 'none'

});


// Loading scene
// -------------
// Handles the loading of binary assets such as images and audio files
Crafty.scene('Loading', function(){
  // Draw some text for the player to see in case the file
  //  takes a noticeable amount of time to load
  Crafty.e('2D, DOM, Text')
    .text('Loading; please wait...')
    .attr({ x: 0, y: Game.height/2 - 24, w: Game.width})
    //.textFont($text_css);

    // Load our sprite map image
    Crafty.load([
      'assets/FortFacingDoor.png',
      'assets/FortFacingZipline.png',
      'assets/undertheFort_demo.png',
      'assets/EndofZip.png',
      'assets/fork1a_demo.png',
      'assets/ForkB_demo.png',
      'assets/path_B.png',
      'assets/fork1c_demo.png',
      'assets/pathc_demo.png',
      'assets/bridge.png',
      'assets/zipline_thing.png',
      'assets/path1_demo.png',
      'assets/spritesheet1.png',
      'assets/spritesheet2.png'
      ], function(){
      // Once the images are loaded...

      // Define the individual sprites in the image
      // Each one (spr_tree, etc.) becomes a component
      // These components' names are prefixed with "spr_"
      //  to remind us that they simply cause the entity
      //  to be drawn with a certain sprite
      Crafty.sprite(768,512, 'assets/FortFacingDoor.png', {
        spr_fort1_demo: [0, 0],
      })

      Crafty.sprite(768,512, 'assets/FortFacingZipline.png', {
        img_fort_zipline:    [0, 0],
      });

      Crafty.sprite(768,512, 'assets/undertheFort_demo.png', {
        undertheFort_demo:    [0, 0],
      });

      Crafty.sprite(768,512, 'assets/EndofZip.png', {
        img_end_of_zip:    [0, 0],
      });

      Crafty.sprite(768,512, 'assets/path1_demo.png', {
        path_A_demo:    [0, 0],
      });

      Crafty.sprite(768,512, 'assets/fork1a_demo.png', {
        fork1a_demo:    [0, 0],
      });

      Crafty.sprite(768,512, 'assets/ForkB_demo.png', {
        forkb_demo:    [0, 0],
      });

      Crafty.sprite(768,512, 'assets/path_B.png', {
        path_b_demo:    [0, 0],
      });

      Crafty.sprite(768,512, 'assets/fork1c_demo.png', {
        fork_c_demo:    [0, 0],
      });

      Crafty.sprite(768,512, 'assets/pathc_demo.png', {
        path_c_demo:    [0, 0],
      });

      Crafty.sprite(768,512, 'assets/bridge.png', {
        bridge_demo:    [0, 0],
      });

      Crafty.sprite(87,62, 'assets/zipline_thing.png', {
        big_ZipThing_for_zippings:    [0, 0],
      });

      Crafty.sprite(32, 'assets/spritesheet1.png', {
        arrow:    [0, 0],
        normal_curser: [1,0],
        select_curser: [1,1]
      });

      Crafty.sprite(64, 'assets/spritesheet2.png', {
        big_slingshot:    [0, 0],
        little_slingshot:    [0, 1],
        big_ZipThing:    [1, 0],
        little_ZipThing:    [1, 1],

      });

    Crafty.scene('Game');

    });

  
});