var TheGame = pc.Game.extend('TheGame',
{
    // statics
},
{
    onReady: function () {
      var emptyImage,
        playerImage;

      if (pc.device.devMode) {
        pc.device.loader.setDisableCache();
      }

      emptyImage = new pc.Image("empty", "assets/images/empty.png");
      playerImage = new pc.Image("player", "assets/images/full.png"); 

      // Load resources
      pc.device.loader.add(emptyImage);
      pc.device.loader.add(playerImage);

      pc.device.loader.start(this.onLoading.bind(this), this.onLoaded.bind(this));
    },

    onLoading: function () {

    },

    onLoaded: function () {
      var layer = new GameLayer("Test", 1);
      this.myGameScene = new GameScene();

      this.myGameScene.addLayer(layer);

      this.addScene( this.myGameScene );
    }
});

var GameScene = pc.Scene.extend("GameScene", 
  {},
  {
    gameLayer: null,
    init: function () {
      this._super();

      var canvasWidth = pc.device.canvasWidth,
        canvasHeight = pc.device.canvasHeight;

      pc.device.ctx.rect(0, 0, canvasWidth, canvasHeight);
      pc.device.ctx.fill();
    },

    process: function () {

    }
  });

var GameLayer = pc.Layer.extend("GameLayer", 
  {},
  { 
    player: null,

    init: function () {
      this._super("Test", 1);

      this.player = pc.device.loader.get("player").resource;
    },

    draw: function () {
      var ctx = pc.device.ctx;
      this.player.draw(ctx, 100, 100);
    }
  });