document.querySelector('#push').onclick = function () {
    if (document.querySelector('#addtask input').value.length == 0) {
        alert("Please Enter your Task")
    }
    else {
        document.querySelector('#works').innerHTML += `
    <div class="task">
        <span id="taskname">
            ${document.querySelector('#addtask input').value}
        </span>
        <button class="delete">
            <i class="far fa-trash-alt"></i>
        </button>
    </div>
`;

        var current_works = document.querySelectorAll(".delete");
        for (var i = 0; i < current_works.length; i++) {
            current_works[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}