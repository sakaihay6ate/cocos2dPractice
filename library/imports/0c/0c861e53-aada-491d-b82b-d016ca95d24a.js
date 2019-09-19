"use strict";
cc._RF.push(module, '0c8615TqtpJHbgr0BbKldJK', 'game_mgr');
// scripts/game_mgr.js

'use strict';

var UI_manager = require('UI_manager');

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.enterGameScene();
    },
    start: function start() {},
    enterGameScene: function enterGameScene() {
        //release resource
        //init map
        //new ui interface
        UI_manager.showUiAt(this.node, 'GameUI');
    }
}

// update (dt) {},
);

cc._RF.pop();