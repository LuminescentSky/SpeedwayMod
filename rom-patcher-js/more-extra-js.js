document.getElementById("versionSelect").innerHTML += "<option value='0'>Speedway Mod 0.1 Beta</option>";
document.getElementById("versionSelect").innerHTML += "<option value='1'>Speedway Mod 0.1.1 Beta</option>";
document.getElementById("versionSelect").innerHTML += "<option value='2'>Speedway Mod 0.2 Beta</option>";
document.getElementById("versionSelect").innerHTML += "<option value='3'>Speedway Mod 0.3 Beta (PAL only)</option>";
document.getElementById("versionSelect").innerHTML += "<option value='4'>Speedway Mod 0.3.1 Beta (PAL only)</option>";
document.getElementById("versionSelect").innerHTML += "<option value='5'>Speedway Mod 0.3.2 Beta (Latest, PAL only)</option>";

document.getElementById("versionSelect").value = selectedVersion;

function changeVersion() {
	if (document.getElementById("versionSelect").value == 0) {
		window.location.href = "./0.1"
	} else if (document.getElementById("versionSelect").value == 1) {
		window.location.href = "./0.1.1"
	} else if (document.getElementById("versionSelect").value == 2) {
		window.location.href = "./0.2"
	} else if (document.getElementById("versionSelect").value == 3) {
		window.location.href = "./0.3"
	} else if (document.getElementById("versionSelect").value == 4) {
		window.location.href = "./0.3.1"
	} else if (document.getElementById("versionSelect").value == 5) {
		window.location.href = "./0.3.2"
	}
}

function downloadCue(version) {
	var platformRegion = document.getElementById("rom-patcher-select-patch").options[document.getElementById("rom-patcher-select-patch").selectedIndex].text;
	window.location.href = "./speedwaymod-releases/cue/Speedway Mod " + version + " " + platformRegion + ".cue";
}