let res = document.getElementById('res')
const span = document.querySelectorAll('span')
const board = Array.from(span)
let player = false

board.forEach((square, index) => {
    square.addEventListener('click', () => {
        player = !player
        if (square.innerHTML.length > 0) {
            return
        } else {
            if (player == true) {
                square.innerHTML = 'X'
            } else {
                square.innerHTML = 'O'
            }
        }
        square.classList.add('stop')
        // =================================LÓGICA DO JOGADOR "X"========================================
        if(board[0].innerHTML == 'X' && board[1].innerHTML == 'X' && board[2].innerHTML == 'X') {
            res.innerHTML = 'Player 1 ganhou !'
            board[0].style.backgroundColor =  'greenyellow'
            board[1].style.backgroundColor =  'greenyellow'
            board[2].style.backgroundColor =  'greenyellow'
            for(let c = 0;c < 9; c++) {
                board[c].classList.add('stop')
            }
        }
        if(board[3].innerHTML == 'X' && board[4].innerHTML == 'X' && board[5].innerHTML == 'X') {
            res.innerHTML = 'Player 1 ganhou !'
            board[3].style.backgroundColor =  'greenyellow'
            board[4].style.backgroundColor =  'greenyellow'
            board[5].style.backgroundColor =  'greenyellow'
            for(let c = 0;c < 9; c++) {
                board[c].classList.add('stop')
            }
        }
        if(board[6].innerHTML == 'X' && board[7].innerHTML == 'X' && board[8].innerHTML == 'X') {
            res.innerHTML = 'Player 1 ganhou !'
            board[6].style.backgroundColor =  'greenyellow'
            board[7].style.backgroundColor =  'greenyellow'
            board[8].style.backgroundColor =  'greenyellow'
            for(let c = 0;c < 9; c++) {
                board[c].classList.add('stop')
            }
        }
        if(board[0].innerHTML == 'X' && board[3].innerHTML == 'X' && board[6].innerHTML == 'X') {
            res.innerHTML = 'Player 1 ganhou !'
            board[0].style.backgroundColor =  'greenyellow'
            board[3].style.backgroundColor =  'greenyellow'
            board[6].style.backgroundColor =  'greenyellow'
            for(let c = 0;c < 9; c++) {
                board[c].classList.add('stop')
            }
        }
        if(board[1].innerHTML == 'X' && board[4].innerHTML == 'X' && board[7].innerHTML == 'X') {
            res.innerHTML = 'Player 1 ganhou !'
            board[1].style.backgroundColor =  'greenyellow'
            board[4].style.backgroundColor =  'greenyellow'
            board[7].style.backgroundColor =  'greenyellow'
            for(let c = 0;c < 9; c++) {
                board[c].classList.add('stop')
            }
        }
        if(board[2].innerHTML == 'X' && board[5].innerHTML == 'X' && board[8].innerHTML == 'X') {
            res.innerHTML = 'Player 1 ganhou !'
            board[2].style.backgroundColor =  'greenyellow'
            board[5].style.backgroundColor =  'greenyellow'
            board[8].style.backgroundColor =  'greenyellow'
            for(let c = 0;c < 9; c++) {
                board[c].classList.add('stop')
            }
        }
        if(board[0].innerHTML == 'X' && board[4].innerHTML == 'X' && board[8].innerHTML == 'X') {
            res.innerHTML = 'Player 1 ganhou !'
            board[0].style.backgroundColor =  'greenyellow'
            board[4].style.backgroundColor =  'greenyellow'
            board[8].style.backgroundColor =  'greenyellow'
            for(let c = 0;c < 9; c++) {
                board[c].classList.add('stop')
            }
        }
        if(board[2].innerHTML == 'X' && board[4].innerHTML == 'X' && board[6].innerHTML == 'X') {
            res.innerHTML = 'Player 1 ganhou !'
            board[2].style.backgroundColor =  'greenyellow'
            board[4].style.backgroundColor =  'greenyellow'
            board[6].style.backgroundColor =  'greenyellow'
            for(let c = 0;c < 9; c++) {
                board[c].classList.add('stop')
            }
        }
        // =================================LÓGICA DO JOGADOR "O"========================================
        if(board[0].innerHTML == 'O' && board[1].innerHTML == 'O' && board[2].innerHTML == 'O') {
            res.innerHTML = 'Player 2 ganhou !'
            board[0].style.backgroundColor =  'greenyellow'
            board[1].style.backgroundColor =  'greenyellow'
            board[2].style.backgroundColor =  'greenyellow'
            for(let c = 0;c < 9; c++) {
                board[c].classList.add('stop')
            }
        }
        if(board[3].innerHTML == 'O' && board[4].innerHTML == 'O' && board[5].innerHTML == 'O') {
            res.innerHTML = 'Player 2 ganhou !'
            board[3].style.backgroundColor =  'greenyellow'
            board[4].style.backgroundColor =  'greenyellow'
            board[5].style.backgroundColor =  'greenyellow'
            for(let c = 0;c < 9; c++) {
                board[c].classList.add('stop')
            }
        }
        if(board[6].innerHTML == 'O' && board[7].innerHTML == 'O' && board[8].innerHTML == 'O') {
            res.innerHTML = 'Player 2 ganhou !'
            board[6].style.backgroundColor =  'greenyellow'
            board[7].style.backgroundColor =  'greenyellow'
            board[8].style.backgroundColor =  'greenyellow'
            for(let c = 0;c < 9; c++) {
                board[c].classList.add('stop')
            }
        }
        if(board[0].innerHTML == 'O' && board[3].innerHTML == 'O' && board[6].innerHTML == 'O') {
            res.innerHTML = 'Player 2 ganhou !'
            board[0].style.backgroundColor =  'greenyellow'
            board[3].style.backgroundColor =  'greenyellow'
            board[6].style.backgroundColor =  'greenyellow'
            for(let c = 0;c < 9; c++) {
                board[c].classList.add('stop')
            }
        }
        if(board[1].innerHTML == 'O' && board[4].innerHTML == 'O' && board[7].innerHTML == 'O') {
            res.innerHTML = 'Player 2 ganhou !'
            board[1].style.backgroundColor =  'greenyellow'
            board[4].style.backgroundColor =  'greenyellow'
            board[7].style.backgroundColor =  'greenyellow'
            for(let c = 0;c < 9; c++) {
                board[c].classList.add('stop')
            }
        }
        if(board[2].innerHTML == 'O' && board[5].innerHTML == 'O' && board[8].innerHTML == 'O') {
            res.innerHTML = 'Player 2 ganhou !'
            board[2].style.backgroundColor =  'greenyellow'
            board[5].style.backgroundColor =  'greenyellow'
            board[8].style.backgroundColor =  'greenyellow'
            for(let c = 0;c < 9; c++) {
                board[c].classList.add('stop')
            }
        }
        if(board[0].innerHTML == 'O' && board[4].innerHTML == 'O' && board[8].innerHTML == 'O') {
            res.innerHTML = 'Player 2 ganhou !'
            board[0].style.backgroundColor =  'greenyellow'
            board[4].style.backgroundColor =  'greenyellow'
            board[8].style.backgroundColor =  'greenyellow'
            for(let c = 0;c < 9; c++) {
                board[c].classList.add('stop')
            }
        }
        if(board[2].innerHTML == 'O' && board[4].innerHTML == 'O' && board[6].innerHTML == 'O') {
            res.innerHTML = 'Player 2 ganhou !'
            board[2].style.backgroundColor =  'greenyellow'
            board[4].style.backgroundColor =  'greenyellow'
            board[6].style.backgroundColor =  'greenyellow'
            for(let c = 0;c < 9; c++) {
                board[c].classList.add('stop')
            }
        }
    })
})

function restart() {
    board.forEach(square => {
        square.innerHTML = ''
        player = false
        square.style.backgroundColor = '#6161b8'
        res.innerHTML = ''
        for(let c = 0;c < 9; c++) {
            board[c].classList.remove('stop')
        }
    })
}