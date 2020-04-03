function start_Quiz() {
    $('.btn1').on('click', event => {
        $('fieldset').empty();
        render_questions();
    })
}

function render_questions() {
    $('.score').empty();
    $('.score').append(`<ul><li>Current Question: ${STORE.currentQuestion + 1}/10</li><li>Current Score: ${STORE.score}</li></ul>`)
    $('fieldset').empty();
    $('fieldset').addClass('question_container')
    $('.question_container').append(
        `<div>
             <p class='title'> ${STORE.questions[STORE.currentQuestion].question} </p>
             <form> 
                <label><input type="radio" value = ${STORE.questions[STORE.currentQuestion].options[0]} name= 'answer' >${STORE.questions[STORE.currentQuestion].options[0].replace('_', ' ')}</label><br>
                <label><input type="radio" value = ${STORE.questions[STORE.currentQuestion].options[1]} name= 'answer' >${STORE.questions[STORE.currentQuestion].options[1].replace('_', ' ')}</label><br>
                <label><input type="radio" value = ${STORE.questions[STORE.currentQuestion].options[2]} name= 'answer' >${STORE.questions[STORE.currentQuestion].options[2].replace('_', ' ')}</label><br>
                <label><input type="radio" value = ${STORE.questions[STORE.currentQuestion].options[3]} name= 'answer' >${STORE.questions[STORE.currentQuestion].options[3].replace('_', ' ')}</label><br>
            </form>
            <button id = "submit-answer" class='btn btn2'>  Submit </button>
         </div>`
    );
    STORE.currentQuestion = STORE.currentQuestion + 1;
}
function check_if_right() {
    $('fieldset').on('click', '#submit-answer', event => {
        let user_selected_option = $('input[type=radio][name=answer]:checked').val()
        if (!user_selected_option) {
            alert("Choose an option");
            return;
        }
        let correct_answer = (user_selected_option === STORE.questions[STORE.currentQuestion - 1].answer);

        if (correct_answer) {
            STORE.score = STORE.score + 1
            //console.log(STORE.questions[STORE.currentQuestion - 1].image)
            $('.question_container').empty()
            $('.question_container').addClass('correct')
            $('fieldset').append(`<div><img src='${STORE.questions[STORE.currentQuestion - 1].image}'><p class='title' style="text-align: center; padding-top: 10px">Right!</p><p>${STORE.questions[STORE.currentQuestion - 1].info}</p><button id = "right_continue" class="btn btn3">  Continue </button></div>`)
        }
        else {
            $('fieldset').empty()
            $('.question_container').addClass('incorrect')
            $('fieldset').append(`<div><img src='${STORE.questions[STORE.currentQuestion - 1].image}'><p class='title' style="text-align: center">Incorrect !!!</p><p>The Correct Answer is ${STORE.questions[STORE.currentQuestion - 1].answer.replace('_', ' ')} <br>${STORE.questions[STORE.currentQuestion - 1].info}</p><button id = "wrong_continue" class='btn btn3'>  Continue </button></div>`)
        }
        $('.score').empty();
        $('.score').append(`<ul><li>Current Question: ${STORE.currentQuestion}/10</li><li>Current Score: ${STORE.score}</li></ul>`)

    })
}


function next_question_handler() {
    $('fieldset').on('click', '.btn3', event => {
        $('.question_container').removeClass('correct')
        $('.question_container').removeClass('incorrect')
        if (STORE.questions.length > STORE.currentQuestion) {
            render_questions();
        }
        else {
            $('fieldset').empty()
            $('ul').empty()
            $('fieldset').addClass('final_box')
            $('fieldset').append(`<div><p style="text-align: center">Thanks For Playing </p><br>Final Score: ${STORE.score} <br> <button class="btn btn2"> Restart</button></div>`)
            STORE.currentQuestion = 0;
            STORE.score = 0;
            $('button').on('click', event => {
                render_questions();
            })
        }
    })
}

function timer (){
    //let timer = setTimeout(quiz_Handler, 60000)
    let time = 60;
    let quizTimer = setInterval(() => {
        time -= 1;
    }, 1000);
}


function quiz_Handler() {
    timer();
    start_Quiz();
    check_if_right();
    next_question_handler();
}

quiz_Handler();





