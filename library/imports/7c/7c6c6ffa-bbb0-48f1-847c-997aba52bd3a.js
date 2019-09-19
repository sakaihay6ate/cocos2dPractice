"use strict";
cc._RF.push(module, '7c6c6/6u7BI8YR8mXq6Ur06', 'GameUI_ctrl');
// scripts/uiCtrls/GameUI_ctrl.js

"use strict";

var UI_ctrl = require("UI_ctrl");
var UI_manager = require("UI_manager");

cc.Class({
    extends: UI_ctrl,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        UI_ctrl.prototype.onLoad.call(this);
        console.log(this.view);
        this.view['Player'].addComponent('player');

        // this.view['Player'].getComponent().jumpHeight.set(200);
        // console.log(this.view['Player'].getProperties('jumpHeight'));

        UI_manager.addButtonListener(this.view['btn_play'], this, this.clickPlay);
        //anchor為中心點所以要再往上1/2高
        this.groundY = this.view['ground'].y + this.view['ground'].height / 2;
        this.timer = 0;
        this.starDuration = 0;

        // this.spawnNewStar();
        this.score = 0;
    },
    spawnNewStar: function spawnNewStar() {
        cc.loader.loadRes('star', function (err, prefab) {
            var item = cc.instantiate(prefab);
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
    getNewStarPosition: function getNewStarPosition() {
        var randX = 0;
        var randY = this.groundY + Math.random() * this.player.getComponent('player').jumpHeight + 30;
        var maxX = this.ground.width / 2;
        randX = (Math.random() - 0.5) * 2 * maxX;
        return cc.v2(randX, randY);
    },
    clickPlay: function clickPlay() {
        console.log("play game");
    },
    start: function start() {}
}
// update (dt) {},
);

cc._RF.pop();