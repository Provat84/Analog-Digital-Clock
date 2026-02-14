function update(){

    var d=new Date();
    var s=d.getSeconds();
    var m=d.getMinutes();
    var h=d.getHours();

    //finding the angles for every hand
    var sdg=(s/60)*360;
    var mdg=(m/60)*360+(s/60)*6;
    var hdg=(h/12)*360+(m/60)*30;

    //rotating by DOM
    document.getElementById("second").style.transform=`rotate(${sdg}deg)`;
    document.getElementById("minute").style.transform=`rotate(${mdg}deg)`;
    document.getElementById("hour").style.transform=`rotate(${hdg}deg)`;

    //digital clock
    var dh=h.toString().padStart(2,"0");
    var dm=m.toString().padStart(2,"0");
    var ds=s.toString().padStart(2,"0");
    document.getElementById("dig").innerText = `${dh}:${dm}:${ds}`;
}
setInterval(update,1000);
update();