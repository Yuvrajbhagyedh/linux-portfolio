const input = document.getElementById("commandInput");
const output = document.getElementById("output");

const commands = {

help: `
Available Commands

about     - About me
skills    - My tech stack
projects  - My projects
contact   - Contact info
clear     - Clear terminal
`,

about: `
Hi I am Yuvraj
MCA Student
Frontend Developer

Specializing in
React
JavaScript
Web Development
`,

skills: `
HTML
CSS
JavaScript
React
Git
`,

projects: `
1. Online Code Editor
2. Typing Speed Tester
3. Delivery Date Predictor
4. Fitness Tracking System
`,

contact: `
Email : yuvrajbhagyedh@gmail.com
Phone : 8088713395
GitHub : github.com/yuvraj
LinkedIn : linkedin.com
`

};

input.addEventListener("keypress", function(e){

if(e.key === "Enter"){

let cmd = input.value.trim();

output.innerHTML += `<div class="output-line"><span class="prompt">yuvraj@linux:~$</span> ${cmd}</div>`;

if(cmd === "clear"){
output.innerHTML = "";
}
else if(commands[cmd]){
output.innerHTML += `<div class="output-line">${commands[cmd]}</div>`;
}
else{
output.innerHTML += `<div class="output-line">Command not found</div>`;
}

input.value = "";

}

});