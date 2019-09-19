let UI_manager={
    addButtonListener(view_node,caller,func){
        let button=view_node.getComponent(cc.Button);
        if(!button){
            console.error('not a button');
            return;
        }
        view_node.on("click",func,caller);
    },
    showUiAt(parent,uiName){
        console.log(`showUiAt${parent.name}`)
        cc.loader.loadRes("UI_prefabs/" + uiName, function (err, prefab) {
            let item = cc.instantiate(prefab);
            parent.addChild(item);
            item.addComponent(uiName + "_ctrl");
        });
    }
};

module.exports=UI_manager;