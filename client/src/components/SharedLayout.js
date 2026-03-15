import { Outlet } from 'react-router-dom'
import { useEffect} from 'react';




const SharedLayout = () => {

  const playAutoPlay = ()=>{

    let videoPlay = document.getElementsByClassName("videoPlay")
    // let videoPlay2 = document.getElementsByClassName("videoPlay2")
    
    let videoArray = Object.keys(videoPlay).map((k) => videoPlay[k])
    // let videoArray2 = Object.keys(videoPlay2).map((k) => videoPlay2[k])

    videoArray?.forEach((video)=>{
      if(!video.playing){
        video.play()
      }
    })

    // videoArray2?.map((video)=>{
    //   if(video.currentTime>0){
    //     return;
    //   } else {
    //     video.play()        
    //   }
    // })
  }


  useEffect(()=>{   
    Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
      get: function () {
          return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
      }
  });
  }, [])



  return (
    <>
    <main onClick={playAutoPlay} onTouchStart={playAutoPlay}>     
        <Outlet />
    </main>
    </>
  )
}

export default SharedLayout