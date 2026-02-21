    const currentTime = () => {
        const now = new Date();

        const curTime = now.toLocaleTimeString();
        const curDate = now.toLocaleDateString();

        document.querySelector('#clock').innerText = curTime;
        document.querySelector('#Date').innerText = curDate;
    }

    currentTime();

    setInterval(currentTime, 1000);