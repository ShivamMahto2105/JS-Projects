 const countDownElement = document.getElementById("countDown")
    const resetValueElement = document.querySelector(".resetValue")
    let intervalId = null;
    let count = 0;

    const StartTimer = () => {
      if (intervalId !== null) return;

      intervalId = setInterval(() => {
        count++;
        countDownElement.innerText = count;
      }, 500);
    }

    const StopTimer = () => {
      clearInterval(intervalId);
      intervalId = null;
    }

    const ResetTimer = () => {
      clearInterval(intervalId)
      intervalId = null;
      count = 0;
      countDownElement.innerText = count;
    }

    const GetTime = () => {
      const p = document.createElement("p")
      p.innerText = `Saved Time : ${count}`
      resetValueElement.append(p)
    }

    const ClearTimer = () => {
      resetValueElement.innerText = "";
    }

    document.querySelector(".start_btn").addEventListener('click', StartTimer)

    document.querySelector(".reset_btn").addEventListener('click', ResetTimer)

    document.querySelector(".stop_btn").addEventListener('click', StopTimer)

    document.querySelector(".time_btn").addEventListener('click', GetTime)

    document.querySelector(".clear_btn").addEventListener('click', ClearTimer)