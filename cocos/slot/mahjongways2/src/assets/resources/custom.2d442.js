cc.game.once(cc.game.EVENT_GAME_INITED,()=>{function e(){cc.game.emit("CUSTOM-RESIZE")}gsap.registerPlugin(MotionPathPlugin),window.version=new Map,window.version.set("gameFramework","1.5.0"),cc.macro.ENABLE_MULTI_TOUCH=!1,cc.sys.isMobile?window.addEventListener("resize",e):cc.view.on("canvas-resize",e)});