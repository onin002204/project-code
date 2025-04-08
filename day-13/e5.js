const moveStack = [];

function makeMove(move) {
  moveStack.push(move);
  console.log(`Move made: ${move}`);
}

function undoMove(move) {
  console.log(`Undoing move: ${move}`);
}

function undoLastMove() {
  if (moveStack.length === 0) {
    console.log("No moves to undo.");
    return;
  }

  const lastMove = moveStack.pop();
  undoMove(lastMove);
}

// Example usage
makeMove("Move to (1, 1)");
makeMove("Move to (2, 1)");
makeMove("Move to (3, 1)");

undoLastMove(); // Undo (3,1)
undoLastMove(); // Undo (2,1)
undoLastMove(); // Undo (1,1)
undoLastMove(); // No moves to undo
