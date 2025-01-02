document.getElementById("versionSelect").innerHTML += "<option value='0'>BETA 0.1</option>";
document.getElementById("versionSelect").innerHTML += "<option value='1'>BETA 0.1.1</option>";
document.getElementById("versionSelect").innerHTML += "<option value='2'>BETA 0.2 (Latest)</option>";

document.getElementById("versionSelect").value = selectedVersion;

function changeVersion() {
	if (document.getElementById("versionSelect").value == 0) {
		window.location.href = "./0.1"
	} else if (document.getElementById("versionSelect").value == 1) {
		window.location.href = "./0.1.1"
	} else if (document.getElementById("versionSelect").value == 2) {
		window.location.href = "./0.2"
	}
}

function downloadCue(version) {
	var platformRegion = document.getElementById("rom-patcher-select-patch").options[document.getElementById("rom-patcher-select-patch").selectedIndex].text;
	window.location.href("./speedwaymod-releases/cue/Speedway Mod " + version + " " + platformRegion + ".cue");
}