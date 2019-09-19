var UI_ctrl=require("UI_ctrl");
var UI_manager=require("UI_manager");

cc.Class({
    extends: UI_ctrl,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        UI_ctrl.prototype.onLoad.call(this);
        console.log(this.view)
        this.view['Player'].addComponent('player')

        // this.view['Player'].getComponent().jumpHeight.set(200);
        // console.log(this.view['Player'].getProperties('jumpHeight'));
        
        UI_manager.addButtonListener(this.view['btn_play'],this,this.clickPlay);
        //anchor為中心點所以要再往上1/2高
        this.groundY = this.view['ground'].y + this.view['ground'].height / 2;
        this.timer = 0;
        this.starDuration = 0;

        // this.spawnNewStar();
        this.score = 0;
    },
    spawnNewStar() {
        cc.loader.loadRes('star', function (err, prefab) {
            let item = cc.instantiate(prefab);
            this.node.addChild(item);
            // item.addComponent(uiName + "_ctrl");
        });
        // let newStar = cc.instantiate(this.star);
        this.node.addChild(newStar);
        newStar.setPosition(this.getNewStarPosition());
        newStar.getComponent('star').game = this;
        this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
        this.timer = 0;
    },
    getNewStarPosition() {
        let randX = 0;
        let randY = this.groundY + Math.random() * this.player.getComponent('player').jumpHeight + 30;
        let maxX = this.ground.width / 2;
        randX = (Math.random() - 0.5) * 2 * maxX;
        return cc.v2(randX, randY);
    },
    clickPlay(){
        console.log(`play game`);

    },
    start () {

    },
    // update (dt) {},
});
