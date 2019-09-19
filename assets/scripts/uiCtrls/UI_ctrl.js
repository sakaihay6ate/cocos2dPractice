

cc.Class({
    extends: cc.Component,

    properties: {

    },
    loadAllObject(root,path){
        for(let i=0;i<root.childrenCount;i++){
            this.view[path+root.children[i].name]=root.children[i];
            this.loadAllObject(root.children[i],path+root.children[i].name+"/");
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.view={};
        this.loadAllObject(this.node,"");
    },

    start () {

    },

    // update (dt) {},
});
