const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock') //same working as above

setInterval(function(){     //setInterval=> controls the event of the javaScript
    let date = new Date()
    // console.log(date.toLocaleString());
    clock.innerHTML = date.toLocaleTimeString();
},1000);