const t1=document.getElementById("start")
const task = document.getElementById('task')
const desc = document.getElementById('desc')
const tab = document.getElementById('tab')
const hrs=document.getElementById('hrs')
const min=document.getElementById('min')
const sec=document.getElementById('sec')

let intervalID
let s=0,m=0,h=0

function start() {
    if(t1.textContent==='Start'){
        t1.textContent='Stop'
        t1.style.setProperty('background-color','red')
        intervalID=setInterval(function (){
            if(s>=60){
                s=0
                min.textContent=(++m).toString().padStart(2,"0")
            }
            else if(m>=60){
                m=0
                hrs.textContent=(++h).toString().padStart(2,'0')
            }
            sec.textContent=(++s).toString().padStart(2,'0')
        },1000)
    }

    else if(t1.textContent==='Stop'){
        t1.textContent='Start'
        // Use modulo to alternate between theme1 and theme2
        const rowColorClass = (tab.rows.length % 2 === 0) ? 'theme1' : 'theme2';
        tab.innerHTML += `<tr class="${rowColorClass}">
            <td>${task.value}</td>
            <td>${desc.value}</td>
            <td>${h + ':' + m + ':' + s}</td>
        </tr>`;
        task.value = "";
        desc.value = "";
        t1.style.backgroundColor = '#4CAF50';
        clearInterval(intervalID);
        sec.textContent = "00";
        min.textContent = "00";
        hrs.textContent = "00";
        s=0,m=0,h=0;
    }
}

t1.addEventListener("click", start);