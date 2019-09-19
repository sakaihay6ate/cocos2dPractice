(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/manager/UI_manager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2c453zo499Bw7R7r52JQS3j', 'UI_manager', __filename);
// scripts/UI_manager.js

"use strict";

var UI_manager = {
    addButtonListener: function addButtonListener(view_node, caller, func) {
        var button = view_node.getComponent(cc.Button);
        if (!button) {
            console.error('not a button');
            return;
        }
        view_node.on("click", func, caller);
    },
    showUiAt: function showUiAt(parent, uiName) {
        console.log("showUiAt" + parent.name);
        cc.loader.loadRes("UI_prefabs/" + uiName, function (err, prefab) {
            var item = cc.instantiate(prefab);
            parent.addChild(item);
            item.addComponent(uiName + "_ctrl");
        });
    }
};

module.exports = UI_manager;

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
        //# sourceMappingURL=UI_manager.js.map
        