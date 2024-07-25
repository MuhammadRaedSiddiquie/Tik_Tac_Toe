const playBtn = <HTMLElement>document.getElementById('play_btn')
const board = <HTMLElement>document.getElementById('_board')
const againBtn = <HTMLElement>document.getElementById('again_btn')
const playAgain = <HTMLElement>document.getElementById('play_again')
const againText = <HTMLElement>document.getElementById('again_heading')


playBtn.addEventListener('click', () => {
    playBtn.style.display = "none";
    board.style.display = "flex";
    // runGame_single()
    runMultiPlay()
})
againBtn.addEventListener('click', () => {

    playAgain.style.display = "none";
    againText.innerText = ""
    board.style.display = "flex";

    mylist = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]

    for (let k = 0; k < crossmark.length; k++) {
        crosstile[k].style.pointerEvents = 'inherit'
        crossmark[k].classList.remove('open')
        crossmark[k].classList.add('close')
    }

    document.getElementById('circleOne')!.classList.remove('open')
    document.getElementById('circleOne')!.classList.add('close')

    document.getElementById('circleTwo')!.classList.remove('open')
    document.getElementById('circleTwo')!.classList.add('close')

    document.getElementById('circleThree')!.classList.remove('open')
    document.getElementById('circleThree')!.classList.add('close')

    document.getElementById('circleFour')!.classList.remove('open')
    document.getElementById('circleFour')!.classList.add('close')

    document.getElementById('circleFive')!.classList.remove('open')
    document.getElementById('circleFive')!.classList.add('close')

    document.getElementById('circleSix')!.classList.remove('open')
    document.getElementById('circleSix')!.classList.add('close')

    document.getElementById('circleSeven')!.classList.remove('open')
    document.getElementById('circleSeven')!.classList.add('close')

    document.getElementById('circleEight')!.classList.remove('open')
    document.getElementById('circleEight')!.classList.add('close')

    document.getElementById('circleNine')!.classList.remove('open')
    document.getElementById('circleNine')!.classList.add('close')


    for (let z = 0; z < arr.length; z++) {
        arr[z] = z.toString();
    }

    chance = 0
})

let tileOne: string = "0"
let tileTwo: string = "1"
let tileThree: string = "2"
let tileFour: string = "3"
let tileFive: string = "4"
let tileSix: string = "5"
let tileSeven: string = "6"
let tileEight: string = "7"
let tileNine: string = "8"
let arr: string[] = [tileOne, tileTwo, tileThree, tileFour, tileFive, tileSix, tileSeven, tileEight, tileNine]
let comp
let random
let random2
let mylist: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
let timer
let chance: number = 0
let crosstile = document.querySelectorAll<HTMLElement>('.tile')
let crossmark = document.getElementsByClassName('fa-xmark')
let circlemark = document.getElementsByClassName('fa-circle')


function runGame_single() {
    random = Math.floor(Math.random() * mylist.length)
    comp = mylist[random]

    if (comp == "0") {
        arr[0] = arr[0].replace("0", "O")
        chance += 1
        if (crossmark[0].classList.contains('close')) {
            document.getElementById('circleOne')!.classList.add('open')
            document.getElementById('circleOne')!.classList.remove('close')
        }
    }
    else if (comp == "1") {
        arr[1] = arr[1].replace("1", "O")
        chance += 1
        if (crossmark[1].classList.contains('close')) {
            document.getElementById('circleTwo')!.classList.add('open')
            document.getElementById('circleTwo')!.classList.remove('close')
        }
    }
    else if (comp == "2") {
        arr[2] = arr[2].replace("2", "O")
        chance += 1
        if (crossmark[2].classList.contains('close')) {
            document.getElementById('circleThree')!.classList.add('open')
            document.getElementById('circleThree')!.classList.remove('close')
        }
    }
    else if (comp == "3") {
        arr[3] = arr[3].replace("3", "O")
        chance += 1
        if (crossmark[3].classList.contains('close')) {
            document.getElementById('circleFour')!.classList.add('open')
            document.getElementById('circleFour')!.classList.remove('close')
        }
    }
    else if (comp == "4") {
        arr[4] = arr[4].replace("4", "O")
        chance += 1
        if (crossmark[4].classList.contains('close')) {
            document.getElementById('circleFive')!.classList.add('open')
            document.getElementById('circleFive')!.classList.remove('close')
        }
    }
    else if (comp == "5") {
        arr[5] = arr[5].replace("5", "O")
        chance += 1
        if (crossmark[5].classList.contains('close')) {
            document.getElementById('circleSix')!.classList.add('open')
            document.getElementById('circleSix')!.classList.remove('close')
        }
    }
    else if (comp == "6") {
        arr[6] = arr[6].replace("6", "O")
        chance += 1
        if (crossmark[6].classList.contains('close')) {
            document.getElementById('circleSeven')!.classList.add('open')
            document.getElementById('circleSeven')!.classList.remove('close')
        }
    }
    else if (comp == "7") {
        arr[7] = arr[7].replace("7", "O")
        chance += 1
        if (crossmark[7].classList.contains('close')) {
            document.getElementById('circleEight')!.classList.add('open')
            document.getElementById('circleEight')!.classList.remove('close')
        }
    }
    else if (comp == "8") {
        arr[8] = arr[8].replace("8", "O")
        chance += 1
        if (crossmark[8].classList.contains('close')) {
            document.getElementById('circleNine')!.classList.add('open')
            document.getElementById('circleNine')!.classList.remove('close')
        }
    }

    mylist = mylist.filter(e => e !== comp);

    for (let j: any = 0; j < crosstile.length; j++) {
        crosstile[j].onclick = function (e) {

            if (circlemark[j].classList.contains('close')) {
                console.log('clicked')
                let x = arr[j]
                mylist = mylist.filter(e => e !== x);
                arr[j] = arr[j].replace(j, "X")
                crosstile[j].style.pointerEvents = "none"
                chance += 1
                mylist = mylist.filter(e => e !== comp);
                random2 = Math.floor(Math.random() * mylist.length)
                comp = mylist[random2]

                if (circlemark[j].classList.contains('close')) {
                    crossmark[j].classList.add('open')
                    crossmark[j].classList.remove('close')
                }
                if (circlemark[j].classList.contains('close')) {
                    if (comp == "0") {
                        arr[0] = arr[0].replace("0", "O")
                        chance += 1
                        if (crossmark[0].classList.contains('close')) {
                            timer = setTimeout(() => {
                                document.getElementById('circleOne')!.classList.add('open')
                                document.getElementById('circleOne')!.classList.remove('close')
                            }, 1000)
                        }
                    }
                    else if (comp == "1") {
                        arr[1] = arr[1].replace("1", "O")
                        chance += 1
                        if (crossmark[1].classList.contains('close')) {
                            timer = setTimeout(() => {
                                document.getElementById('circleTwo')!.classList.add('open')
                                document.getElementById('circleTwo')!.classList.remove('close')
                            }, 1000)
                        }
                    }
                    else if (comp == "2") {
                        arr[2] = arr[2].replace("2", "O")
                        chance += 1
                        if (crossmark[2].classList.contains('close')) {
                            timer = setTimeout(() => {
                                document.getElementById('circleThree')!.classList.add('open')
                                document.getElementById('circleThree')!.classList.remove('close')
                            }, 1000)
                        }
                    }
                    else if (comp == "3") {
                        arr[3] = arr[3].replace("3", "O")
                        chance += 1
                        if (crossmark[3].classList.contains('close')) {
                            timer = setTimeout(() => {
                                document.getElementById('circleFour')!.classList.add('open')
                                document.getElementById('circleFour')!.classList.remove('close')
                            }, 1000)
                        }
                    }
                    else if (comp == "4") {
                        arr[4] = arr[4].replace("4", "O")
                        chance += 1
                        if (crossmark[4].classList.contains('close')) {
                            timer = setTimeout(() => {
                                document.getElementById('circleFive')!.classList.add('open')
                                document.getElementById('circleFive')!.classList.remove('close')
                            }, 1000)
                        }
                    }
                    else if (comp == "5") {
                        arr[5] = arr[5].replace("5", "O")
                        chance += 1
                        if (crossmark[5].classList.contains('close')) {
                            timer = setTimeout(() => {
                                document.getElementById('circleSix')!.classList.add('open')
                                document.getElementById('circleSix')!.classList.remove('close')
                            }, 1000)
                        }
                    }
                    else if (comp == "6") {
                        arr[6] = arr[6].replace("6", "O")
                        chance += 1
                        if (crossmark[6].classList.contains('close')) {
                            timer = setTimeout(() => {
                                document.getElementById('circleSeven')!.classList.add('open')
                                document.getElementById('circleSeven')!.classList.remove('close')
                            }, 1000)
                        }
                    }
                    else if (comp == "7") {
                        arr[7] = arr[7].replace("7", "O")
                        chance += 1
                        if (crossmark[7].classList.contains('close')) {
                            timer = setTimeout(() => {
                                document.getElementById('circleEight')!.classList.add('open')
                                document.getElementById('circleEight')!.classList.remove('close')
                            }, 1000)
                        }
                    }
                    else if (comp == "8") {
                        arr[8] = arr[8].replace("8", "O")
                        chance += 1
                        if (crossmark[8].classList.contains('close')) {
                            timer = setTimeout(() => {
                                document.getElementById('circleNine')!.classList.add('open')
                                document.getElementById('circleNine')!.classList.remove('close')
                            }, 1000)
                        }
                    }
                }

                if (arr[0] == "X" && arr[1] == "X" && arr[2] == "X" || arr[3] == "X" && arr[4] == "X" && arr[5] == "X" || arr[6] == "X" && arr[7] == "X" && arr[8] == "X" || arr[0] == "X" && arr[3] == "X" && arr[6] == "X" || arr[1] == "X" && arr[4] == "X" && arr[7] == "X" || arr[2] == "X" && arr[5] == "X" && arr[8] == "X" || arr[0] == "X" && arr[4] == "X" && arr[8] == "X" || arr[2] == "X" && arr[4] == "X" && arr[6] == "X") {
                    clearTimeout(timer)
                    for (let x: any = 0; x < crosstile.length; x++) {
                        crosstile[x].style.pointerEvents = 'none'
                    }
                    setTimeout(() => {
                        playAgain.style.display = "flex";
                        againText.innerText = "You Won Congo"
                    }, 1000)
                }
                else if (arr[0] == "O" && arr[1] == "O" && arr[2] == "O" || arr[3] == "O" && arr[4] == "O" && arr[5] == "O" || arr[6] == "O" && arr[7] == "O" && arr[8] == "O" || arr[0] == "O" && arr[3] == "O" && arr[6] == "O" || arr[1] == "O" && arr[4] == "O" && arr[7] == "O" || arr[2] == "O" && arr[5] == "O" && arr[8] == "O" || arr[0] == "O" && arr[4] == "O" && arr[8] == "O" || arr[2] == "O" && arr[4] == "O" && arr[6] == "O") {
                    setTimeout(() => {
                        playAgain.style.display = "flex";
                        againText.innerText = "You Lost Alas"
                    }, 2000)
                }
                else if (chance >= 9) {
                    setTimeout(() => {
                        playAgain.style.display = "flex";
                        againText.innerText = "Tied"
                    }, 1000)
                }
            }
        }
    }
}
var user = true
function runMultiPlay() {






    for (let j: any = 0; j < crosstile.length; j++) {
        crosstile[j].onclick = function (e) {

            if (circlemark[j].classList.contains('close')) {
                console.log('clicked')
                let x = arr[j]
                mylist = mylist.filter(e => e !== x);
                arr[j] = arr[j].replace(j, user ? "O" : "X")
                crosstile[j].style.pointerEvents = "none"
                chance += 1
                mylist = mylist.filter(e => e !== comp);

                if (user) {
                    crossmark[j].classList.contains('close')
                    circlemark[j].classList.add('open')
                    circlemark[j].classList.remove('close')
                    user=false
                }


                else if (circlemark[j].classList.contains('close')) {
                    crossmark[j].classList.add('open')
                    crossmark[j].classList.remove('close')
                    user=true

                }


            }



            if (arr[0] == "X" && arr[1] == "X" && arr[2] == "X" || arr[3] == "X" && arr[4] == "X" && arr[5] == "X" || arr[6] == "X" && arr[7] == "X" && arr[8] == "X" || arr[0] == "X" && arr[3] == "X" && arr[6] == "X" || arr[1] == "X" && arr[4] == "X" && arr[7] == "X" || arr[2] == "X" && arr[5] == "X" && arr[8] == "X" || arr[0] == "X" && arr[4] == "X" && arr[8] == "X" || arr[2] == "X" && arr[4] == "X" && arr[6] == "X") {
                clearTimeout(timer)
                for (let x: any = 0; x < crosstile.length; x++) {
                    crosstile[x].style.pointerEvents = 'none'
                }
                setTimeout(() => {
                    playAgain.style.display = "flex";
                    againText.innerText = "\"X\" is Winner"
                    console.log(arr)
                }, 1000)
            }
            else if (arr[0] == "O" && arr[1] == "O" && arr[2] == "O" || arr[3] == "O" && arr[4] == "O" && arr[5] == "O" || arr[6] == "O" && arr[7] == "O" && arr[8] == "O" || arr[0] == "O" && arr[3] == "O" && arr[6] == "O" || arr[1] == "O" && arr[4] == "O" && arr[7] == "O" || arr[2] == "O" && arr[5] == "O" && arr[8] == "O" || arr[0] == "O" && arr[4] == "O" && arr[8] == "O" || arr[2] == "O" && arr[4] == "O" && arr[6] == "O") {
                setTimeout(() => {
                    playAgain.style.display = "flex";
                    againText.innerText = "\"O\" is Winner"
                }, 500)
            }
            else if (chance >= 9) {
                setTimeout(() => {
                    playAgain.style.display = "flex";
                    againText.innerText = "Tied"
                }, 500)
            }
        }
    }
}

