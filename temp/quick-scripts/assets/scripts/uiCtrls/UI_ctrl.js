(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/uiCtrls/UI_ctrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c991aZvy8dFtaH299WAnB0V', 'UI_ctrl', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=UI_ctrl.js.map
        