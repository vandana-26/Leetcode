/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  
  let rows = [], columns = [], subBox = [];
  
  for(let i = 0; i < board.length; i++){
    rows.push(new Set());
    columns.push(new Set());
    subBox.push(new Set());
  }
  
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j <board.length; j++){
      let boxnums = 3 * Math.floor(i/3) + Math.floor(j/3);
      if(board[i][j] == '.')
       continue;
      else if(rows[i].has(board[i][j]) || columns[j].has(board[i][j]) || subBox[boxnums].has(board[i][j]))
         return false;
      else{
        rows[i].add(board[i][j]);  
        columns[j].add(board[i][j]);
        subBox[boxnums].add(board[i][j]);
        
      }
    }
  }
  return true;  
};