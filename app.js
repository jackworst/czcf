var minDifficulty = 1;
var maxDifficulty = 10;
var category = undefined;
var starredOnly = false;
var editMode = false;

var bindFilterControls = function() {
	$("#controls #min-difficulty").change(function() {
		minDifficulty = parseInt($(this).val(), 10);
		updateList();
	});
	$("#controls #max-difficulty").change(function() {
		maxDifficulty = parseInt($(this).val(), 10);
		updateList();
	});
	$("#controls #category").change(function() {
		var val = $(this).val();
		category = val === "any" ? undefined : val;
		updateList();
	});
	$("#controls #starred").change(function() {
		var val = $(this).val();
		starredOnly = val === "starred";
		updateList();
	});
	$("#controls #edit").click(function() {
		editMode = !editMode;
		$(this).text(editMode ? "Done" : "Edit");
		updateList();
	});
};

var bindListControls = function() {
	$("#list").on("click", ".plusBtn", function() {
		var id = $(this).closest("li").attr("data-id");
		storeDifficulty(id, challenges[id].difficulty + 1);
		updateList();
	});
	$("#list").on("click", ".minusBtn", function() {
		var id = $(this).closest("li").attr("data-id");
		storeDifficulty(id, challenges[id].difficulty - 1);
		updateList();
	});
	$("#list").on("click", ".starBtn, .unstarBtn", function() {
		var id = $(this).closest("li").attr("data-id");
		storeStar(id, !challenges[id].starred);
		updateList();
	});
};

var filterChallenges = function() {
	var challengeList = [];
	$.each(challenges, function(id, challenge) {
		if (challenge.difficulty < minDifficulty) {
			return;
		}
		if (challenge.difficulty > maxDifficulty) {
			return;
		}
		if (category && $.inArray(category, challenge.categories) < 0) {
			return;
		}
		if (starredOnly && !challenge.starred) {
			return;
		}
		var challengeItem = $.extend({id: id}, challenge);
		challengeList.push(challengeItem);
	});
	return challengeList;
};

var generateList = function() {
	var filteredChallenges = filterChallenges(challenges);
	var ul = $('<ul/>');

	$.each(filteredChallenges, function(i, challenge) {
		var difficulty = $('<span class="difficulty"/>').text(challenge.difficulty);
		var text = $('<span/>').text(challenge.description);
		var plusBtn = $('<button class="plusBtn">+</button>');
		var minusBtn = $('<button class="minusBtn">-</button>');
		var starBtn = $('<button class="starBtn">☆</button>');
		var unstarBtn = $('<button class="unstarBtn">★</button>');
		var li = $('<li class="challenge"/>').attr("data-id", challenge.id);
		
		if (!editMode) {
			li.append(challenge.starred ? unstarBtn :starBtn);
		}
		li.append(difficulty);
		if (editMode && challenge.difficulty < 10) {
			li.append(plusBtn);
		}
		if (editMode && challenge.difficulty > 1) {
			li.append(minusBtn);
		}
		li.append(text);
		ul.append(li);
	});
	
	if (filteredChallenges.length === 0) {
		ul.append('<li>No matching challenges</li>');
	}
	
	return ul;
};

var updateList = function() {
	var list = generateList();
	$("#list").empty().append(list);
};

var loadLocalChallengeData = function() {
	var localChallengeData = JSON.parse(localStorage.challenges || "{}");
	$.each(localChallengeData, function(id, challengeData) {
		$.extend(challenges[id], challengeData);
	});
};

var storeDifficulty = function(id, difficulty) {
	var localChallengeData = JSON.parse(localStorage.challenges || "{}");
	if (!localChallengeData[id]) {
		localChallengeData[id] = {};
	}
	localChallengeData[id].difficulty = difficulty;
	localStorage.challenges = JSON.stringify(localChallengeData);
	challenges[id].difficulty = difficulty;
};

var storeStar = function(id, starred) {
	var localChallengeData = JSON.parse(localStorage.challenges || "{}");
	if (!localChallengeData[id]) {
		localChallengeData[id] = {};
	}
	localChallengeData[id].starred = starred;
	localStorage.challenges = JSON.stringify(localChallengeData);
	challenges[id].starred = starred;
};

$(document).ready(function() {
	loadLocalChallengeData();
	bindFilterControls();
	bindListControls();
	updateList();
});