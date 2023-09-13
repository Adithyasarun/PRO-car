AFRAME.registerComponent('game', {
    schema: {
        gameState:{type:"string" , default:"play"}
    },

    init: function () {
      let duration = 300
      let timeEl = document.querySelector("#time")
      this.setTime(duration,timeEl)

    },
    setTime:function(duration,timeEl){
      var minutes
      var seconds
     

      setInterval(() => {
        if(duration >= 0){
          this.data.gameState="play"
          minutes = parseInt(duration/60)
          seconds = parseInt(duration%60)

          if(minutes < 10){
            minutes ="0"+minutes
          }

          if(seconds < 10){
            seconds ="0"+seconds
          }

          timeEl.setAttribute("text",{
            value:minutes+":"+seconds
          })

          duration -= 1
        }
        else{
          this.data.gameState="over"
          camera = document.querySelector("#camera-rig")
          camera.setAttribute("velocity",{x:0,y:0,z:0})
          over = document.querySelector("#over")
          over.setAttribute("visible",true)
        }
      }, 1000);
    }
});
