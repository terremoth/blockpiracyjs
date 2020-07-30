const BlockPiracy = {};

BlockPiracy.blockSelection = function() {
    //document.selection.empty();
    window.getSelection().removeAllRanges();
    document.body.innerHTML += '\
        <style>*{\n\
            -webkit-touch-callout: none;\n\
            -webkit-user-select: none;-khtml-user-select:none;\n\
            -moz-user-select: none;\n\
            -ms-user-select: none;\n\
            user-select: none}\n\
        </style>';
};

BlockPiracy.blockRightClick = function() {
    document.addEventListener('contextmenu', function(e){
        e.preventDefault();
        return false;
    },false);
};

BlockPiracy.blockPrintScreen = function() {
    window.onkeyup = function(evt) {
      if (evt.keyCode === 44) {
        // Create a "hidden" input
        var aux = document.createElement("input");
        // Assign it the value of the specified element
        aux.setAttribute("value", "Can't printscreen");
        // Append it to the body
        document.body.appendChild(aux);
        // Highlight its content
        aux.select();
        // Copy the highlighted text
        document.execCommand("copy");
        // Remove it from the body
        document.body.removeChild(aux);
        //alert("Print screen desabilitado.");
      }
    }
};

BlockPiracy.blockImageDrag = function() {

};

BlockPiracy.blockOpenImageNewTab = function() {

};
