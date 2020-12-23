

    
    let turnCount = 1;
    var i;
    var moves = document.getElementsByClassName('cell');
    document.getElementById('tttStart').addEventListener('click', () => {
    
        document.getElementById('gameResult').innerText = "";
        if ( turnCount >= 8 ) {
            for ( i = 0; i < 9; i ++ ){
                moves[i].innerText = "";
            }
                turnCount = 1;
                let playerNum = getPlayer(2)
                if ( playerNum === 0 ) {
                    
                    document.getElementById('firstTurn').innerText = "Your go first";
                    nextTurn(playerNum, turnCount);
                } else if ( playerNum === 1 ) {
                    document.getElementById('firstTurn').innerText = "Computer Goes First";
                    nextTurn(playerNum, turnCount); 
                }
        }
     

        if ( turnCount == 1 ) {

            let playerNum = getPlayer(100);
            if ( playerNum === 0 ) {
                playerNum = 0;
            } else {
                playerNum = 1;
            }
            if ( playerNum === 0 ) {
               document.getElementById('firstTurn').innerText = "You go first";
                nextTurn(playerNum, turnCount);
            } else if ( playerNum === 1 ) {
                document.getElementById('firstTurn').innerText = "Computer goes first";
                nextTurn(playerNum, turnCount);
            }

        }

    })

    function getPlayer(num) {
        return Math.floor(Math.random() * Math.floor(num)) % 2;
    }

    function nextTurn(playerNum) {
        if ( playerNum == 0 ) {
            playerTurn(playerNum)
        } else if ( playerNum == 1 ) {
            computerTurn(turnCount)
            
        }
    }

    function playerTurn() {
        for( i = 1; i < 10; i++ ){

            document.getElementById( 'cell' + i ).addEventListener('click', function() {
                if ( turnCount > 9 ) {
                   
                } else {
                    if ( this.innerText === "") {
                        this.innerText = "X";
                        playerNum = 1;
                        turnCount += 1;
                        if ( turnCount > 9 ) {
                            document.getElementById('gameResult').innerText = "Game Ended in a Draw! Game Over. Press Start to play again."
                        } else {
                            nextTurn(playerNum);
                        }
                    }
                }
            });

        }
    }

    function computerTurn() {
        switch (turnCount) {
            case 1:
                corner = randomCorner(4);
                moves[corner].innerText = "O";
                turnCount += 1;
                playerNum = 0;
                nextTurn(playerNum);
                break;

            case 2:

                if ( moves[4].innerText === "") {
                    moves[4].innerText = "O";
                } else {
                    let corner = randomCorner(4);
                    moves[corner].innerText = "O";
                }
                turnCount += 1;
                playerNum = 0;
                nextTurn(playerNum);
                break;

            case 3:
 
     
              // check for player moves to center first
              if ( moves[4].innerText === "X" ) {
                  if ( moves[0].innerText === "O" ) {
                      moves[8].innerText = "O";
                  } else if ( moves[2].innerText === "O" ) {
                      moves[6].innerText = "O";
                  } else if ( moves[6].innerText === "O" ) {
                      moves[2].innerText = "O"
                  } else if ( moves[8].innerText === "O" ) {
                      moves[0].innerText = "O";
                  }

              } else if ( moves[0].innerText === "O" ) {
                  if ( moves[2].innerText === "X" || moves[6].innerText === "X" ) {
                  moves[8].innerText = "O";
                } else {
                    moves[4].innerText = "O";
                } 
            } else if ( moves[2].innerText === "O" ) {
                if ( moves[0].innerText === "X" || moves[8].innerText === "X" ) {
                    moves[6].innerText = "O";
                  } else {
                      moves[4].innerText = "O";
                  }
            } else if ( moves[6].innerText === "O" ) {

                if ( moves[0].innerText === "X" || moves[8].innerText === "X") {
                    moves[2].innerText = "O";
                  } else {
                      moves[4].innerText = "O";
                  }  
            } else if( moves[8].innerText === "O") {
                 if ( moves[2].innerText === "X" || moves[6].innerText === "X" ) {
                      moves[0].innerText = "O";
                  } else {
                      moves[4].innerText = "O";
                  }
            } else {
                checkOpp();
                turnCount += 1;
                playerNum = 0;
                nextTurn(playerNum);
                break;
                
            }
              turnCount += 1;
              playerNum = 0;
              nextTurn(playerNum);
              break;

            case 4:
                console.log(turnCount)
                var isThreat = checkThreat();
                var isLeap = checkLeapFrog();
                if ( isThreat === true ) {
                        
                    turnCount++;
                    playerNum = 0;
                    nextTurn(playerNum);
                    break;

                } else if ( isLeap === true ) {

                    if ( moves[1].innerText === "" ) {
                         moves[1].innerText = "O"
                         break;
                    }
                
                } else if ( moves[4].innerText === "X" && ( moves[0].innerText === "X" || moves[2].innerText === "X" || moves[6].innerText === "X" || moves[8].innerText === "X" ) ) {
            
                    if ( moves[0].innerText === "X" && moves[8].innerText === "O" ) {
                        moves[2].innerText = "O";	
                        turnCount++;
                        playerNum = 0;
                        nextTurn(playerNum);
                        break;

                    } else if ( moves[2].innerText === "X" && moves[6].innerText === "O" ) {
                        moves[0].innerText = "O";
                        turnCount++;
                        playerNum = 0;
                        nextTurn(playerNum);
                        break;

                    } else if ( moves[6].innerText === "X" && moves[2].innerText === "O" ) {
                        moves[0].innerText = "O";
                        turnCount++;
                        playerNum = 0;
                        nextTurn(playerNum);
                        break;

                    } else if ( moves[8].innerText === "X" && moves[0].innerText === "O" ) {
                        moves[2].innerText = "O";
                        turnCount++;
                        playerNum = 0;
                        nextTurn(playerNum);
                        break;
                    }
            

            
                } else {
            
                    var isOpp = checkOpp();
            
                    if ( isOpp === true ) {
                        turnCount++;
                        playerNum = 0;
                        nextTurn(playerNum);
                        break;
            
                    } else if ( isOpp === false ) {
            
                            for ( i = 0; i < 9; i++ ) {
            
                                if ( moves[i].innerText === "" ) {
                                    moves[i].innerText = "O";
                                    i = 10;
                                }
                            }
                        turnCount++;
                        playerNum = 0;
                        nextTurn(playerNum);
                        break;
            
                    }
            
                }
            break;
                
            case 5:
            case 7:
                var isTicTacToe = checkTicTacToe();
                if ( isTicTacToe === true ) {
                    turnCount = 10;
                    document.getElementById('gameResult').innerText = "Tic Tac Toe! Game over. Press Start to play again."
                    
                    break;
                } 
                var isThreat = checkThreat();
                if ( isThreat === true ) {
                    console.log('Threat handled')
                    turnCount += 1;
                    playerNum = 0;
                    nextTurn(playerNum);
                    break;

                } else if ( isThreat === false ) {
                    console.log('No threat');
                    var isOpp = checkOpp();
                } 

                if ( isOpp === true ) {
                    console.log('Opportunity taken')
                    turnCount += 1;
                    playerNum = 0;
                    nextTurn(playerNum);
                    break;
                } else {
                    console.log('No Opp')
                    i = 0;
                    while ( moves[i].innerText != "" ) {
                        i++;
                    }
                    moves[i].innerText = "O";
                    turnCount += 1;
                    playerNum = 0;
                    nextTurn(playerNum);
                    break;
                }



            case 6:
            case 8:
                var isTicTacToe = checkTicTacToe();
                if ( isTicTacToe === true ) {
                    turnCount = 10;
                    document.getElementById('gameResult').innerText = "Tic Tac Toe! Game over. Press Start to play again.";
                    break;
                } else if ( isTicTacToe === false ){
                    var isThreat = checkThreat();
                    if ( isThreat === true )  {
                        turnCount += 1;
                        playerNum = 0;
                        nextTurn(playerNum);
                        break;
                    } else {
                        var isOpp = checkOpp();
                    }

                    if ( isOpp === true ) {
                        turnCount += 1;
                        playerNum = 0;
                        nextTurn(playerNum);
                        break;
                    } else {
                        for ( i = 0; i < 9; i++ ) {
                            if( moves[i].innerText === "" ) {
                                moves[i].innerText = "O";
                                i = 10;
                            }
                        }

                        turnCount += 1;
                        playerNum = 0;
                        nextTurn(playerNum);
                        break;
                    }
                }


            case 9:
                var isTicTacToe = checkTicTacToe();

                if ( isTicTacToe === true ) {
                    turnCount = 10;
                    document.getElementById('gameResult').innerText = "Tic Tac Toe! Game over. Press Start to play again."
                    break;
                } else {
                for ( i = 0; i < 9; i++ ) {

                    if ( moves[i].innerText === "" ) {
                        moves[i].innerText = "O";
                        i = 10;
                    }
                }
                
                document.getElementById('gameResult').innerText = "Game Ended in a Draw! Game Over. Press Start to play again.";
            }
 
        }

        function checkTicTacToe(){
            
            //check for any open tic tac toe spots to complete a row, column or diagonal
            //row 1
            if ( moves[0].innerText === "O" && moves[1].innerText === "O" && moves[2].innerText === "" ){
                moves[2].innerText = "O";
                isTicTacToe = true;
                return isTicTacToe;
            
            } else if ( moves[0].innerText === "O" && moves[1].innerText === "" && moves[2].innerText === "O" ) {
                moves[1].innerText = "O";
                isTicTacToe = true;
                return isTicTacToe;
                
            } else if ( moves[0].innerText === "" && moves[1].innerText === "O" && moves[2].innerText === "O" ) {
                moves[0].innerText = "O";
                isTicTacToe = true;
                return isTicTacToe;
                
            //row 2
            } else if ( moves[3].innerText === "O" && moves[4].innerText === "O" && moves[5].innerText === "" ){
                moves[5].innerText = "O";
                isTicTacToe = true;
                return isTicTacToe;

            } else if ( moves[3].innerText === "O" && moves[4].innerText === "" && moves[5].innerText === "O" ) {
                moves[4].innerText = "O";
                isTicTacToe = true;
                return isTicTacToe;

            } else if ( moves[3].innerText === "" && moves[4].innerText === "O" && moves[5].innerText === "O" ) {
                moves[3].innerText = "O";
                isTicTacToe = true;
                return isTicTacToe;
            }
            //row 3
              else if ( moves[6].innerText === "O" && moves[7].innerText === "O" && moves[8].innerText === "" ){
                moves[8].innerText = "O";
                isTicTacToe = true;
                return isTicTacToe;

            } else if ( moves[6].innerText === "O" && moves[7].innerText === "" && moves[8].innerText === "O" ) {
                moves[7].innerText = "O";
                isTicTacToe = true;
                return isTicTacToe;

            } else if ( moves[6].innerText === "" && moves[7].innerText === "O" && moves[8].innerText === "O" ) {
                moves[6].innerText = "O";
                isTicTacToe = true;
                return isTicTacToe;
            }

            // check by column
            //col 1
             else if ( moves[0].innerText === "O" && moves[3].innerText === "O" && moves[6].innerText === "" ){
                moves[6].innerText = "O";
                isTicTacToe = true;
                return isTicTacToe;

            } else if ( moves[0].innerText === "O" && moves[3].innerText === "" && moves[6].innerText === "O" ) {
                moves[3].innerText = "O";
                isTicTacToe = true;
                return isTicTacToe;

            } else if ( moves[0].innerText === "" && moves[3].innerText === "O" && moves[6].innerText === "O" ) {
                moves[0].innerText = "O";
                isTicTacToe = true;
                return isTicTacToe;

            //col2
            } else if ( moves[1].innerText === "O" && moves[4].innerText === "O" && moves[7].innerText === "" ){
                moves[7].innerText = "O";
                isTicTacToe = true;
                return isTicTacToe;

            } else if ( moves[1].innerText === "O" && moves[4].innerText === "" && moves[7].innerText === "O" ) {
                moves[4].innerText = "O";
                isTicTacToe = true;
                return isTicTacToe;

            } else if ( moves[1].innerText === "" && moves[4].innerText === "O" && moves[7].innerText === "O" ) {
                moves[1].innerText = "O";
                isTicTacToe = true;
                return isTicTacToe;
            }
            //col 3
              else if ( moves[2].innerText === "O" && moves[5].innerText === "O" && moves[8].innerText === "" ){
                moves[8].innerText = "O";
                isTicTacToe = true;
                return isTicTacToe;

            } else if ( moves[2].innerText === "O" && moves[5].innerText === "" && moves[8].innerText === "O" ) {
                moves[5].innerText = "O";
                isTicTacToe = true;
                return isTicTacToe;

            } else if ( moves[2].innerText === "" && moves[5].innerText === "O" && moves[8].innerText === "O" ) {
                moves[2].innerText = "O";
                isTicTacToe = true;
                return isTicTacToe;
            }

            //now check the diagonal
            // top left to bottom right
             else if ( moves[0].innerText === "O" && moves[4].innerText === "O" && moves[8].innerText === "" ){
                moves[8].innerText = "O";
                isTicTacToe = true;
                return isTicTacToe;

            } else if ( moves[0].innerText === "O" && moves[4].innerText === "" && moves[8].innerText === "O" ) {
                moves[4].innerText = "O";
                isTicTacToe = true;
                return isTicTacToe;

            } else if ( moves[0].innerText === "" && moves[4].innerText === "O" && moves[8].innerText === "O" ) {
                moves[0].innerText = "O";
                isTicTacToe = true;
                return isTicTacToe;

            //top right to bottom left
            } else if ( moves[2].innerText === "O" && moves[4].innerText === "O" && moves[6].innerText === "" ){
                moves[6].innerText = "O";
                isTicTacToe = true;
                return isTicTacToe;

            } else if ( moves[2].innerText === "O" && moves[4].innerText === "" && moves[6].innerText === "O" ) {
                moves[4].innerText = "O";
                isTicTacToe = true;
                return isTicTacToe;

            } else if ( moves[2].innerText === "" && moves[4].innerText === "O" && moves[6].innerText === "O" ) {
                moves[2].innerText = "O";
                isTicTacToe = true;
                return isTicTacToe;

            } else {
                isTicTacToe = false;
                return isTicTacToe;
            }
        }


        function checkThreat(){
            
            //check by row for 2 Xs and and open space where a threat exists
            //row 1
            if ( moves[0].innerText === "X" && moves[1].innerText === "X" && moves[2].innerText === "" ){
               if ( moves[2].innerText == "" ) {
                   moves[2].innerText = "O";
                   isThreat = true;
                    return isThreat;
               }
                

            } else if ( moves[0].innerText === "X" && moves[1].innerText === "" && moves[2].innerText === "X" ) {
                if ( moves[1].innerText == "" ) {
                    moves[1].innerText = "O";
                    isThreat = true;
                     return isThreat;
                }

            } else if ( moves[0].innerText === "" && moves[1].innerText === "X" && moves[2].innerText === "X" ) {
                if ( moves[0].innerText == "" ) {
                    moves[0].innerText = "O";
                    isThreat = true;
                     return isThreat;
                }
            //row 2
            } else if ( moves[3].innerText === "X" && moves[4].innerText === "X" && moves[5].innerText === "" ){
                if ( moves[5].innerText == "" ) {
                    moves[5].innerText = "O";
                    isThreat = true;
                     return isThreat;
                }
            } else if ( moves[3].innerText === "X" && moves[4].innerText === "" && moves[5].innerText === "X" ) {
                if ( moves[4].innerText == "" ) {
                    moves[4].innerText = "O";
                    isThreat = true;
                     return isThreat;
                }
            } else if ( moves[3].innerText === "" && moves[4].innerText === "X" && moves[5].innerText === "X" ) {
                if ( moves[3].innerText == "" ) {
                    moves[3].innerText = "O";
                    isThreat = true;
                     return isThreat;
                }
            }
            //row 3
              else if ( moves[6].innerText === "X" && moves[7].innerText === "X" && moves[8].innerText === "" ){

                if ( moves[8].innerText == "" ) {
                    moves[8].innerText = "O";
                    isThreat = true;
                     return isThreat;
                }
            } else if ( moves[6].innerText === "X" && moves[7].innerText === "" && moves[8].innerText === "X" ) {
                if ( moves[7].innerText == "" ) {
                    moves[7].innerText = "O";
                    isThreat = true;
                     return isThreat;
                }
            } else if ( moves[6].innerText === "" && moves[7].innerText === "X" && moves[8].innerText === "X" ) {
                if ( moves[6].innerText == "" ) {
                    moves[6].innerText = "O";
                    isThreat = true;
                     return isThreat;
                }
            }

            // check by column
            //col 1
             else if ( moves[0].innerText === "X" && moves[3].innerText === "X" && moves[6].innerText === "" ){
 
                if ( moves[6].innerText == "" ) {
                    moves[6].innerText = "O";
                    isThreat = true;
                     return isThreat;
                }
            } else if ( moves[0].innerText === "X" && moves[3].innerText === "" && moves[6].innerText === "X" ) {
                if ( moves[3].innerText == "" ) {
                    moves[3].innerText = "O";
                    isThreat = true;
                     return isThreat;
                }
            } else if ( moves[0].innerText === "" && moves[3].innerText === "X" && moves[6].innerText === "X" ) {
                if ( moves[0].innerText == "" ) {
                    moves[0].innerText = "O";
                    isThreat = true;
                     return isThreat;
                }
            //col2
            } else if ( moves[1].innerText === "X" && moves[4].innerText === "X" && moves[7].innerText === "" ){
                if ( moves[7].innerText == "" ) {
                    moves[7].innerText = "O";
                    isThreat = true;
                     return isThreat;
                }
            } else if ( moves[1].innerText === "X" && moves[4].innerText === "" && moves[7].innerText === "X" ) {
                if ( moves[4].innerText == "" ) {
                    moves[4].innerText = "O";
                    isThreat = true;
                     return isThreat;
                }
            } else if ( moves[1].innerText === "" && moves[4].innerText === "X" && moves[7].innerText === "X" ) {
                if ( moves[1].innerText == "" ) {
                    moves[1].innerText = "O";
                    isThreat = true;
                     return isThreat;
                }
            }
            //col 3
              else if ( moves[2].innerText === "X" && moves[5].innerText === "X" && moves[8].innerText === "" ){
                if ( moves[8].innerText == "" ) {
                    moves[8].innerText = "O";
                    isThreat = true;
                     return isThreat;
                }
            } else if ( moves[2].innerText === "X" && moves[5].innerText === "" && moves[8].innerText === "X" ) {
                if ( moves[5].innerText == "" ) {
                    moves[5].innerText = "O";
                    isThreat = true;
                     return isThreat;
                }
            } else if ( moves[2].innerText === "" && moves[5].innerText === "X" && moves[8].innerText === "X" ) {
                if ( moves[2].innerText == "" ) {
                    moves[2].innerText = "O";
                    isThreat = true;
                     return isThreat;
                }
            }

            //now check the diagonal
            // top left to bottom right
             else if ( moves[0].innerText === "X" && moves[4].innerText === "X" && moves[8].innerText === "" ){

                if ( moves[8].innerText == "" ) {
                    moves[8].innerText = "O";
                    isThreat = true;
                     return isThreat;
                }
            } else if ( moves[0].innerText === "X" && moves[4].innerText === "" && moves[8].innerText === "X" ) {
                if ( moves[4].innerText == "" ) {
                    moves[4].innerText = "O";
                    isThreat = true;
                     return isThreat;
                }
            } else if ( moves[0].innerText === "" && moves[4].innerText === "X" && moves[8].innerText === "X" ) {
                if ( moves[0].innerText == "" ) {
                    moves[0].innerText = "O";
                    isThreat = true;
                     return isThreat;
                }
            //top right to bottom left
            } else if ( moves[2].innerText === "X" && moves[4].innerText === "X" && moves[6].innerText === "" ){
                if ( moves[6].innerText == "" ) {
                    moves[6].innerText = "O";
                    isThreat = true;
                     return isThreat;
                }
            } else if ( moves[2].innerText === "X" && moves[4].innerText === "" && moves[6].innerText === "X" ) {
                if ( moves[4].innerText == "" ) {
                    moves[4].innerText = "O";
                    isThreat = true;
                     return isThreat;
                }
            } else if ( moves[2].innerText === "" && moves[4].innerText === "X" && moves[6].innerText === "X" ) {
                if ( moves[2].innerText == "" ) {
                    moves[2].innerText = "O";
                    isThreat = true;
                     return isThreat;
                }
            } else {
                isThreat = false;
                return isThreat;
            }
        }

        function checkOpp(){

            

            //check if O has center square and if so look for the correct oportunity across diagonal, middle rown and center column

            if( moves[4].innerText === "O" ) {

                if ( moves[0].innerText === ""  && moves[8].innerText === "" ) {
                    moves[0].innerText = "O";
                    isOpp = true;
                    return isOpp;
                } else if ( moves[2].innerText === "" && moves[6].innerText === "" ) {
                    moves[2].innerText = "O";
                    isOpp = true;
                    return isOpp;
                } else if ( moves[1].innerText === "" && moves[7].innerText === "" ) {
                    moves[1].innerText = "O";
                    isOpp = true;
                    return isOpp;
                } else if ( moves[3].innerText === "" && moves[5].innerText === "" ) {
                    moves[3].innerText = "O"
                    isOpp = true;
                    return isOpp;
                }

            } else {

                // look for opportunity to make a threat in row 1
                if( moves[0].innerText === "O" && moves[1].innerText === "" && moves[2].innerText === "" ) {
                    moves[1].innerText = "O";
                    isOpp = true;
                    return isOpp;
                } else if ( moves[0].innerText === "" && moves[1].innerText === "O" && moves[2].innerText === "") {
                    moves[0].innerText = "O";
                    isOpp = true;
                    return isOpp;
                } else if ( moves[0].innerText === "" && moves[1].innerText === "" && moves[2].innerText === "O") {
                    mvoes[0].innerText = "O";
                    isOpp = true;
                    return isOpp;
                } 
                // look for opportunity to make a threat in row 2
                  else if( moves[3].innerText === "O" && moves[4].innerText === "" && moves[5].innerText === "" ) {
                    moves[4].innerText = "O";
                    isOpp = true;
                    return isOpp;
                } else if ( moves[3].innerText === "" && moves[4].innerText === "O" && moves[5].innerText === "") {
                    moves[3].innerText = "O";
                    isOpp = true;
                    return isOpp;
                } else if ( moves[3].innerText === "" && moves[4].innerText === "" && moves[5].innerText === "O") {
                    mvoes[4].innerText = "O";
                    isOpp = true;
                    return isOpp;
                }

                // look for opportunity to make a threat in row 3
                  else if( moves[6].innerText === "O" && moves[7].innerText === "" && moves[8].innerText === "" ) {
                    moves[7].innerText = "O";
                    isOpp = true;
                    return isOpp;
                } else if ( moves[6].innerText === "" && moves[7].innerText === "O" && moves[8].innerText === "") {
                    moves[6].innerText = "O";
                    isOpp = true;
                    return isOpp;
                } else if ( moves[6].innerText === "" && moves[7].innerText === "" && moves[8].innerText === "O") {
                    mvoes[7].innerText = "O";
                    isOpp = true;
                    return isOpp;
                }

                // look for opportunity to make a threat in column 1
                  else if( moves[0].innerText === "O" && moves[3].innerText === "" && moves[6].innerText === "" ) {
                    moves[3].innerText = "O";
                    isOpp = true;
                    return isOpp;
                } else if ( moves[0].innerText === "" && moves[3].innerText === "O" && moves[6].innerText === "") {
                    moves[0].innerText = "O";
                    isOpp = true;
                    return isOpp;
                } else if ( moves[0].innerText === "" && moves[3].innerText === "" && moves[6].innerText === "O") {
                    mvoes[3].innerText = "O";
                    isOpp = true;
                    return isOpp;
                }

                // look for opporuntiy to make threat in column 2

                  else if( moves[1].innerText === "O" && moves[4].innerText === "" && moves[7].innerText === "" ) {
                    moves[4].innerText = "O";
                    isOpp = true;
                    return isOpp;
                } else if ( moves[1].innerText === "" && moves[4].innerText === "O" && moves[7].innerText === "") {
                    moves[1].innerText = "O";
                    isOpp = true;
                    return isOpp;
                } else if ( moves[1].innerText === "" && moves[4].innerText === "" && moves[7].innerText === "O") {
                    mvoes[4].innerText = "O";
                    isOpp = true;
                    return isOpp;
                }

                // look for opportunity to make a threat in column 3

                  else if( moves[2].innerText === "O" && moves[5].innerText === "" && moves[8].innerText === "" ) {
                    moves[5].innerText = "O";
                    isOpp = true;
                    return isOpp;
                } else if ( moves[2].innerText === "" && moves[5].innerText === "O" && moves[8].innerText === "") {
                    moves[2].innerText = "O";
                    isOpp = true;
                    return isOpp;
                } else if ( moves[2].innerText === "" && moves[5].innerText === "" && moves[8].innerText === "O") {
                    mvoes[5].innerText = "O";
                    isOpp = true;
                    return isOpp;
                }
            }

        }

        function checkLeapFrog(){
            if ( moves[4].innerText === "O" && ( ( moves[0].innerText === "X" && moves[8].innerText === "X") || ( moves[2].innerText === "X" && moves[6].innerText === "X" ) ) ) {
                isLeap = true;
                return isLeap;
            } else {
                isLeap = false
                return isLeap;
            }
        }

        function randomCorner(corner) {
            let cornerPos = [0, 2, 6, 8];
            let cornerIndex = Math.floor(Math.random() * Math.floor(corner));
            return cornerPos[cornerIndex];
        }
         
    }