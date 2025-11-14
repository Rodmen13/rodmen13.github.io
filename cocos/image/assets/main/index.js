System.register("chunks:///_virtual/LoadRes.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,o,r,n,a,i,u,l,s,c,d,f,p,m,g,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){a=e.cclegacy,i=e._decorator,u=e.Node,l=e.Label,s=e.tween,c=e.assetManager,d=e.Texture2D,f=e.SpriteFrame,p=e.Sprite,m=e.UITransform,g=e.director,h=e.Component}],execute:function(){var b,v,y,x,C,w,M,z,L,R;a._RF.push({},"ec1220sxeVJM6d8QRv4j+4E","LoadRes",void 0);var S=i.ccclass,F=i.property;e("LoadRes",(b=S("LoadRes"),v=F(u),y=F(l),x=F(l),b(((R=function(e){function t(){for(var t,o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=e.call.apply(e,[this].concat(a))||this,r(t,"content",M,n(t)),r(t,"texture",z,n(t)),r(t,"buffer",L,n(t)),t.resourceBundle=null,t}o(t,e);var a=t.prototype;return a.onLoad=function(){var e=this,t=s(this.node);t=t.delay(1).call((function(){e.loadImage()})),s(this.node).repeatForever(t).start()},a.loadImage=function(){var e=this;t.loadCount++,t.loadCount>20&&(t.loadCount=1),c.cacheAsset=!1,this.resourceBundle,c.loadRemote("https://rodmen13.github.io/cocos/image/test_image_"+t.loadCount+".jpg?t="+Date.now(),(function(t,o){if(console.log("load remote image:",t,o),t)e.texture.string="load remote image failed:"+t.message;else{var r=new d;r.image=o;var n=new f;n.texture=r;var a=new u;a.addComponent(p).spriteFrame=n,a.setPosition(1280*Math.random()-300,1280*Math.random()-200,0),a.getComponent(m).setContentSize(500*Math.random()+2e3,500*Math.random()+2e3),e.content.addChild(a),e.texture&&(e.texture.string=(g.root.device.memoryStatus.textureSize/1048576).toFixed(2)+" MB"),e.buffer&&(e.buffer.string=(g.root.device.memoryStatus.bufferSize/1048576).toFixed(2)+" MB")}}))},a.update=function(e){},t}(h)).loadCount=0,M=t((w=R).prototype,"content",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=t(w.prototype,"texture",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=t(w.prototype,"buffer",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=w))||C));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./LoadRes.ts"],(function(){return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});