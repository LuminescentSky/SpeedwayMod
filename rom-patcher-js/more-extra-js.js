if (selectedVersion >= 0) {
	document.getElementById("versionSelect").innerHTML += "<option value='14'>Speedway Mod 1.0.3 (Latest)</option>";
	document.getElementById("versionSelect").innerHTML += "<option value='13'>Speedway Mod 1.0.2</option>";
	document.getElementById("versionSelect").innerHTML += "<option value='12'>Speedway Mod 1.0.1</option>";
	document.getElementById("versionSelect").innerHTML += "<option value='11'>Speedway Mod 1.0</option>";
	document.getElementById("versionSelect").innerHTML += "<option value='10'>Speedway Mod 1.0 Pre-Release 2 </option>";
	document.getElementById("versionSelect").innerHTML += "<option value='9'>Speedway Mod 1.0 Pre-Release 1</option>";
	document.getElementById("versionSelect").innerHTML += "<option value='8'>Speedway Mod 0.4.2 Beta</option>";
	document.getElementById("versionSelect").innerHTML += "<option value='7'>Speedway Mod 0.4.1 Beta</option>";
	document.getElementById("versionSelect").innerHTML += "<option value='6'>Speedway Mod 0.4 Beta</option>";
	document.getElementById("versionSelect").innerHTML += "<option value='5'>Speedway Mod 0.3.2 Beta </option>";
	document.getElementById("versionSelect").innerHTML += "<option value='4'>Speedway Mod 0.3.1 Beta </option>";
	document.getElementById("versionSelect").innerHTML += "<option value='3'>Speedway Mod 0.3 Beta </option>";
	document.getElementById("versionSelect").innerHTML += "<option value='2'>Speedway Mod 0.2 Beta</option>";
	document.getElementById("versionSelect").innerHTML += "<option value='1'>Speedway Mod 0.1.1 Beta</option>";
	document.getElementById("versionSelect").innerHTML += "<option value='0'>Speedway Mod 0.1 Beta</option>";
} else {
	document.getElementById("versionSelect").innerHTML += "<option value='14'>Speedway Mod Dayo Edition 1.0.3 (Latest)</option>";
}

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
	} else if (document.getElementById("versionSelect").value == 6) {
		window.location.href = "./0.4"
	} else if (document.getElementById("versionSelect").value == 7) {
		window.location.href = "./0.4.1"
	} else if (document.getElementById("versionSelect").value == 8) {
		window.location.href = "./0.4.2"
	} else if (document.getElementById("versionSelect").value == 9) {
		window.location.href = "./1.0-pre-1"
	} else if (document.getElementById("versionSelect").value == 10) {
		window.location.href = "./1.0-pre-2"
	} else if (document.getElementById("versionSelect").value == 11) {
		window.location.href = "./1.0"
	} else if (document.getElementById("versionSelect").value == 12) {
		window.location.href = "./1.0.1"
	} else if (document.getElementById("versionSelect").value == 13) {
		window.location.href = "./1.0.2"
	} else if (document.getElementById("versionSelect").value == 14) {
		window.location.href = "./1.0.3"
	} else if (document.getElementById("versionSelect").value == -1) {
		window.location.href = "./dayo-1.0.3"
	}
}

function downloadCue(version) {
	var platformRegion = document.getElementById("rom-patcher-select-patch").options[document.getElementById("rom-patcher-select-patch").selectedIndex].text;
	window.location.href = "./speedwaymod-releases/cue/Speedway Mod " + version + " " + platformRegion + ".cue";
}