// const list = document.querySelector('ul');
// const newLine = document.createElement('li');
// newLine.textContent = 'five';

// list.appendChild(newLine);


// function contactUs(yourId) {
//     console.log(yourId.id);
//     document.getElementById(yourId.id).remove();
//     let container1 = document.createElement('div');
//     container1.setAttribute('id', 'inner-container-1');
// }

function profile_open() {
    document.getElementById("container-three").style.width = "500px";
    document.getElementById("container-2").style.width = "60%";
}

function profile_close() {

    document.getElementById("container-2").style.width = null;
    document.getElementById("container-three").style.width = null;

}