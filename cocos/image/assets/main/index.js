System.register("chunks:///_virtual/LoadRes.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,o,n,i,a,l,u,c,s,d,f,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,o=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){i=e.cclegacy,a=e._decorator,l=e.Node,u=e.Label,c=e.tween,s=e.assetManager,d=e.Sprite,f=e.director,p=e.Component}],execute:function(){var b,m,g,y,h,v,x,F,L;i._RF.push({},"ec1220sxeVJM6d8QRv4j+4E","LoadRes",void 0);var z=a.ccclass,B=a.property;e("LoadRes",(b=z("LoadRes"),m=B(l),g=B(u),y=B(u),b((x=t((v=function(e){function t(){for(var t,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=e.call.apply(e,[this].concat(i))||this,o(t,"content",x,n(t)),o(t,"texture",F,n(t)),o(t,"buffer",L,n(t)),t.resourceBundle=null,t}r(t,e);var i=t.prototype;return i.onLoad=function(){var e=this,t=c(this.node);t=t.delay(1).call((function(){e.loadImage()})),c(this.node).repeatForever(t).start()},i.loadImage=function(){var e=this;s.cacheAsset=!1,this.resourceBundle,s.loadBundle("resources",(function(t,r){t?console.error("Failed to load bundle:",t):(e.resourceBundle=r,r.load("test_image/spriteFrame",(function(t,r){if(t)console.error("Failed to load image:",t);else{console.log("Image loaded successfully:",r);var o=new l;o.addComponent(d).spriteFrame=r,e.content&&(e.content.addChild(o),e.texture&&(e.texture.string=(f.root.device.memoryStatus.textureSize/1048576).toFixed(2)+" MB"),e.buffer&&(e.buffer.string=(f.root.device.memoryStatus.bufferSize/1048576).toFixed(2)+" MB"))}})))}))},i.update=function(e){},t}(p)).prototype,"content",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=t(v.prototype,"texture",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=t(v.prototype,"buffer",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=v))||h));i._RF.pop()}}}));

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