// ### Problem 7: Decision Tree for Customer Support (Tree)

// **Description:**  
// Design a decision tree that helps customer support representatives diagnose issues. Each node represents a question or decision point, and the leaves represent a resolution or action.

// **Instructions:**  
// - Outline how you would structure the decision tree to navigate through a series of questions.
// - Describe the process of traversing the tree based on user responses.
// - Explain how the tree can be expanded as more questions or decisions are added.

// **Hint:**  
// Visualize the decision tree as a flowchart where each branch leads to a follow-up question or a final decision. Consider how a level-order traversal might help in ensuring all questions are considered.

class DecisionNode {
    constructor(text, isResolution = false) {
      this.text = text; // question or resolution text
      this.isResolution = isResolution;
      this.options = new Map(); // key: answer, value: next node
    }
  
    addOption(answerText, nextNode) {
      this.options.set(answerText, nextNode);
    }
  }

  
  const root = new DecisionNode("Is the device powering on?");

const nodeYes = new DecisionNode("Is the screen displaying correctly?");
const nodeNo = new DecisionNode("Check the power cable. Is it connected properly?");

const nodeScreenOK = new DecisionNode("No issue detected. Advise user to restart.", true);
const nodeScreenNotOK = new DecisionNode("Check screen connection or replace display.", true);

const nodeCableYes = new DecisionNode("Try a different power outlet.", true);
const nodeCableNo = new DecisionNode("Instruct user to connect the power cable.", true);

// Connect answers
root.addOption("Yes", nodeYes);
root.addOption("No", nodeNo);

nodeYes.addOption("Yes", nodeScreenOK);
nodeYes.addOption("No", nodeScreenNotOK);

nodeNo.addOption("Yes", nodeCableYes);
nodeNo.addOption("No", nodeCableNo);


function traverseDecisionTree(node) {
    if (node.isResolution) {
      console.log("Resolution: " + node.text);
      return;
    }
  
    console.log("Question: " + node.text);
    console.log("Options:", Array.from(node.options.keys()).join(", "));
  
    // Simulate user input (replace this with actual prompt or input mechanism)
    const userInput = prompt("Your answer: "); // or hardcode for demo/testing
    const nextNode = node.options.get(userInput);
  
    if (nextNode) {
      traverseDecisionTree(nextNode);
    } else {
      console.log("Invalid option. Please try again.");
    }
  }

  
  traverseDecisionTree(root);

  const nodeBattery = new DecisionNode("Is the battery charged?");
nodeYes.addOption("Battery issue", nodeBattery);
