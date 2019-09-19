"use strict";
cc._RF.push(module, 'c991aZvy8dFtaH299WAnB0V', 'UI_ctrl');
// scripts/UI_ctrl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},
    loadAllObject: function loadAllObject(root, path) {
        for (var i = 0; i < root.childrenCount; i++) {
            this.view[path + root.children[i].name] = root.children[i];
            this.loadAllObject(root.children[i], path + root.children[i].name + "/");
        }
    },


    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.view = {};
        this.loadAllObject(this.node, "");
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();