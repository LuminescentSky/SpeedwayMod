document.getElementById("versionSelect").innerHTML += "<option value='0'>Speedway Mod 0.1 Beta</option>";
document.getElementById("versionSelect").innerHTML += "<option value='1'>Speedway Mod 0.1.1 Beta</option>";
document.getElementById("versionSelect").innerHTML += "<option value='2'>Speedway Mod 0.2 Beta (Latest)</option>";

document.getElementById("versionSelect").value = selectedVersion;

document.getElementById("changelogDiv").innerHTML += "<h2>0.2 Beta</h2"
document.getElementById("changelogDiv").innerHTML += "<li>Added custom Time Attack screens after beating Gnasty Gnorc and after 120% completion</li>"
document.getElementById("changelogDiv").innerHTML += "<li>Added IGT to Inventory Screen</li>"
document.getElementById("changelogDiv").innerHTML += "<li>Improved flight speed when initiating flight without momentum (this includes flight levels, making them more speedway viable)</li>"
document.getElementById("changelogDiv").innerHTML += "<li>Added fixed heightcaps (set at same heights as SRT)</li>"
document.getElementById("changelogDiv").innerHTML += "<li>Added manual sharp turn calibration (change offset by pressing R3 + Up/Down)</li>"
document.getElementById("changelogDiv").innerHTML += "<li>Fixed an issue where the game could crash when supercharge jumping after rolling or roll bouncing.</li>"
document.getElementById("changelogDiv").innerHTML += "<li>Removed the ability to change supercharge speed in-game (you can still set the supercharge speed from within the Mod Options)</li>"
document.getElementById("changelogDiv").innerHTML += "<h2>0.1.1 Beta</h2"
document.getElementById("changelogDiv").innerHTML += "<li>Fixed an issue where the game crashes when trying to view the 120% Ending</li>"
document.getElementById("changelogDiv").innerHTML += "<h2>0.1 Beta</h2>"
document.getElementById("changelogDiv").innerHTML += "<li>Initial Beta Release</li>"

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
	window.location.href = "./speedwaymod-releases/cue/Speedway Mod " + version + " " + platformRegion + ".cue";
}