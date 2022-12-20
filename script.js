const countdown = (date,id)=>{

    const countDownDate = new Date(date).getTime();
    
    const x = setInterval(function() {
    
      const now = new Date().getTime();
    
      const distance = countDownDate - now;
    
    
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      document.getElementById(id).innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    
      if (distance < 0) {
        clearInterval(x);
        document.getElementById(id).innerHTML = "EXPIRED";
      }
    }, 1000);
    
    }
    const newYearId = document.getElementById('newYearId-1')
    newYearId.addEventListener('click',()=>{
        document.getElementById('newYearId-2').classList.toggle('d-none')
        countdown("Jan 01, 2023 00:00:00", 'newYearId-2')
    })
    
