//TODO: Verbose?

var input;
var tokens;
var cst;
var ast;
var environ;

/**
 * Initializes the compiler.
 */
function init() {
	//Initialize Ace embedded code editor
	var editor = ace.edit("input");
	editor.setTheme("ace/theme/chrome");
	editor.getSession().setMode("ace/mode/javascript");
	
	$("#compile").on("click", function(){
		input = editor.getValue() + " ";
		tokens = [];
		clearOutput();
		printOutput("Test output");
	});
}

/**
 * Clears text output from output screen.
 */
function clearOutput() {
	$("#output").text("");
}

/**
 * Prints text output to output screen.
 *
 * @param {string} o Text output.
 */
function printOutput(o) {
	$("#output").append(o + "<br />\n");
}