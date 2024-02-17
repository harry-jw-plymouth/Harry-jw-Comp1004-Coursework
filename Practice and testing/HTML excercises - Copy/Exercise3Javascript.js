var isLightOn = false;
function ToggleLight()
{
	if(isLightOn)
    {
        document.getElementById("lightBulb").src="img/bulb-off.png";
        isLightOn=false;
    }
    else{
        document.getElementById("lightBulb").src="img/bulb-on.png";
        isLightOn=true;
    }
}


