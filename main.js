$(document).ready(function() {
	$("#get-video-src").click(function() {
		getVideoSrc();
	});

	$("#get-audio-src").click(function() {
		getAudioSrc();
	});

	$("#game-type").change(function() {
		setGameType();
	});

	$(".get-start-time").click(function() {
		getStartTime();
	});

	$(".get-end-time").click(function() {
		getEndTime();
	});
});

$(document).on("change", ".cause-labels", function() {
	var row = $(this).parent().parent().attr("id");
	var label = $(this).val();
	updateCauseLabels(row, label);
});
	
$(document).on("change", ".response-labels", function() {
	var row = $(this).parent().parent().attr("id");
	var label = $(this).val();
	updateResponseLabels(row, label);
});

$(document).on("click", ".add-row", function() {
	var lastRow = $(this).parent().parent().attr("id");
	var rowNum = parseInt(lastRow.substring(3));
	rowNum++;
	addRow(rowNum);
});

$(document).on("click", ".delete-row", function() {
	var row = $(this).parent().parent().attr("id");
	deleteRow(row);
});

function getVideoSrc() {
	var src = $("#video-src").val();
	var type = src.substring(src.lastIndexOf(".") + 1);
	var html = "<source src='" + src + "' type='video/" + type + "'>";
	$("#game-video").html(html);
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

	var c = "<option></option>";
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

	var r = "<option></option>";
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

function deleteRow(row) {
	$("#" + row).remove();
	console.log("Row Delted");
}

function getStartTime() {
	console.log("Got Start Time");
}

function getEndTime() {
	console.log("Got End Time");
}

function updateCauseLabels(row, label) {
	var html = $("#" + row + " td:nth-child(2)").html();
	if (html == "") {
		html = label;
	}
	else if(html.indexOf(label) == -1) {
		html += ", " + label;
	}
	else {
		html = html.replace(label + ", ", "");
		html = html.replace(", " + label, "");
		html = html.replace(label, "");
	}
	$("#" + row + " td:nth-child(2)").html(html);
	$("#" + row + " .cause-labels").val(""); 
	console.log("Updated Cause Labels");
}

function updateResponseLabels(row, label) {
	var html = $("#" + row + " td:nth-child(4)").html();
	if (html == "") {
		html = label;
	}
	else if(html.indexOf(label) == -1) {
		html += ", " + label;
	}
	else {
		html = html.replace(label + ", ", "");
		html = html.replace(", " + label, "");
		html = html.replace(label, "");
	}
	$("#" + row + " td:nth-child(4)").html(html);
	$("#" + row + " .response-labels").val(""); 
	console.log("Updated Response Labels");
}
