const editor = document.getElementById("editor");

function textBold(){
  editor.style.fontWeight = "bold";
};

function italicText(){
  editor.style.fontStyle = "italic";
};

function underlineText() {
  editor.style.textDecoration = "underline";
};

function leftAlign() {
  editor.style.textAlign = "left";
};

function centerAlign() {
  editor.style.textAlign = "center";
};

function rightAlign() {
  editor.style.textAlign = "right";
};

function justifyContent(){
  editor.style.textAlign = "justify"
}
function textTransform(){
  editor.style.textTransform = "uppercase";
};



function changeFontSize(){
  const fontSize = document.getElementById("font-size").value;
  editor.style.fontSize = `${fontSize}px`;
};
function changeTextColor(){
  const colorPicker = document.getElementById("color-picker").value;
  editor.style.color = colorPicker;
};