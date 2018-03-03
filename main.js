$(document).ready(function() {
	$("#get-video-src").click(function() {
		getVideoSrc();
	});

	$("#get-audio-src").click(function() {
		getAudioSrc();
	});

	setGameType();
	$("#game-type").change(function() {
		setGameType();
	});

	$(".delete-row").click(function() {
		deleteRow();
	});

	$(".get-start-time").click(function() {
		getStartTime();
	});

	$(".get-end-time").click(function() {
		getEndTime();
	});

	$(".cause-labels").change(function() {
		updateCauseLabels();
	});

	$(".response-labels").change(function() {
		updateResponseLabels();
	});
});

$(document).on("click", ".add-row", function() {
	var lastRow = $(this).parent().parent().attr("id");
	var rowNum = parseInt(lastRow.substring(3));
	rowNum++;
	addRow(rowNum);
});

function getVideoSrc() {
	console.log("Got Video");
}

function getAudioSrc() {
	console.log("Got Audio");
}

function setGameType() {
	var c = getCauses();
	var r = getResponses();

	$(".cause-labels").html(c);
	$(".response-labels").html(r);
	console.log("Type Set");
}

function getCauses() {
	var causes = new Array();
	if ($("#game-type").val() == "basketball") {
		causes = ["1point", "2point", "3point", "foul", "PA"];
	}

	var c = "";
	for (var i = 0; i < causes.length; i++) {
		c += "<option value='" + causes[i] + "'>" + causes[i] + "</option>";
	}
	return c;
}

function getResponses() {
	var responses = new Array();
	if ($("#game-type").val() == "basketball") {
		responses = ["cheer", "chant", "applause", "boo", "noise", "ahh"];
	}

	var r = "";
	for (var i = 0; i < responses.length; i++) {
		r += "<option value='" + responses[i] + "'>" + responses[i] + "</option>";
	}
	return r;
}

function addRow(row) {
	if ($("#row" + row).length > 0) {
		incRow(row);
	}

	var causes = getCauses();
	var responses = getResponses();

	var html = "<tr id='row" + row + "' class='table-row'>" +
		"<td><button class='delete-row'>Delete Row</button></td>" +
		"<td></td>" +
		"<td><select class='cause-labels'>" + causes + "</select></td>" +
		"<td></td>" +
		"<td><select class='response-labels'>" + responses + "</select></td>" +
		"<td></td><td><button class='get-start-time'>Get Time</button></td>" +
		"<td></td>" +
		"<td><button class='get-end-time'>Get Time</button></td>" +
		"<td><button class='add-row'>Add Row</button></td>" +
		"</tr>";
	$("#row" + (row - 1)).after(html);

	console.log("Row Added");
}

function incRow(row) {
	if ($("#row" + (row + 1)).length > 0) {
		incRow(row + 1);
	}
	$("#row" + row).attr("id", "row" + (row + 1));
}

function deleteRow() {
	console.log("Row Delted");
}

function getStartTime() {
	console.log("Got Start Time");
}

function getEndTime() {
	console.log("Got End Time");
}

function updateCauseLabels() {
	console.log("Updated Cause Labels");
}

function updateResponseLabels() {
	console.log("Updated Response Labels");
}
