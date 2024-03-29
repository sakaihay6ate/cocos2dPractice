// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        jumpHeight:0,
        jumpDuration:0,
        maxMoveSpeed:0,
        accel:0,
        jumpAudio:{
            default:null,
            type:cc.AudioClip
        },
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
    setJumpAction:function(){
        let jumpUp=cc.moveBy(this.jumpDuration,cc.v2(0,this.jumpHeight)).easing(cc.easeCubicActionOut());
        let jumpDown=cc.moveBy(this.jumpDuration,cc.v2(0,-this.jumpHeight)).easing(cc.easeCubicActionIn());
        let callback=cc.callFunc(this.playJumpSound,this)
        return cc.repeatForever(cc.sequence(jumpUp,jumpDown,callback));
    },
    playJumpSound(){
        cc.audioEngine.playEffect(this.jumpAudio,false);
    },
    onKeyDown(event){
        switch(event.keyCode){
            case cc.macro.KEY.a:
                this.accLeft=true;
                break;
            case cc.macro.KEY.d:
                this.accRight=true;
                break;
        }
    },
    onKeyUp(event){
        switch(event.keyCode){
            case cc.macro.KEY.a:
                this.accLeft=false;
                break;
            case cc.macro.KEY.d:
                this.accRight=false;
                break;
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function() {
        this.jumpAction=this.setJumpAction();
        this.node.runAction(this.jumpAction);

        //加速度方向開關
        this.accLeft=false;
        this.accRight=false;

        this.xSpeed=0;

        //init keyboard input listener
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this);
    },

    onDestroy(){
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this);
    },

    start () {

    },

    update (dt) {
        if(this.accLeft){
            this.xSpeed-=this.accel*dt;
        }else if(this.accRight){
            this.xSpeed+=this.accel*dt;
        }
        if(Math.abs(this.xSpeed)>this.maxMoveSpeed){
            this.xSpeed=this.maxMoveSpeed*this.xSpeed/Math.abs(this.xSpeed);
        }
        this.node.x += this.xSpeed * dt;
    },
});
