var TheGame = pc.Game.extend('TheGame',
{
    // statics
},
{
    onReady: function () {
      var emptyImage;

      if (pc.device.devMode) {
        pc.device.loader.setDisableCache();
      }

      emptyImage = new pc.Image("empty", "../assets/images/empty.png");

      // Load resources
      pc.device.loader.add(emptyImage);

      pc.device.loader.start(this.onLoading.bind(this), this.onLoaded.bind(this));
    },

    onLoading: function () {

    },

    onLoaded: function () {
      this.myGameScene = new GameScene();

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