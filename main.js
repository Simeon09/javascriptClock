const seconds = document.querySelector('.secondsHands')
        const minuteH = document.querySelector('.minuteHands')
        const hourHand = document.querySelector('#hours')
        function setDate() {
            const now = new Date();
            const getSecond = now.getSeconds();
            const degreeSeconds = ((getSecond / 60) * 360)+ 90;
            seconds.style.transform = `rotate(${degreeSeconds}deg)`;
            console.log(degreeSeconds) 
            
            const getMinute = now.getMinutes();
            const minuteDegrees = ((getMinute/ 60) * 360) + 90 ;
            minuteH.style.transform = `rotate(${minuteDegrees}deg)`;
            console.log(minuteDegrees);

            const getHours = now.getMinutes();
            const hoursDegree = ((getHours/12 ) * 360) + 90 ;
            console.log(hoursDegree);


             
        }
        

        setInterval(setDate, 1000)