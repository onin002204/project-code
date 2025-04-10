// ### Problem 6: File System Hierarchy (Tree)

// **Description:**  
// Model a file system where folders can contain files and other folders. The file system is organized in a tree structure, starting from a root directory.

// **Instructions:**  
// - Describe the tree structure where each node is either a file or a folder.
// - Explain how you would add a new file or folder to a specific directory.
// - Outline how you might traverse the tree to display the full path of each file or to search for a particular file.

// **Hint:**  
// Think of the file system like a tree where the root is the main directory, and branches represent subdirectories and files. A recursive traversal can help in listing or searching through the file system.

class FileSystemNode {
    constructor(name, isFile = false) {
      this.name = name;
      this.isFile = isFile;
      this.children = isFile ? null : []; // files don’t have children
    }
  
    // Add a child node (only if it's a folder)
    addChild(node) {
      if (!this.isFile) {
        this.children.push(node);
      } else {
        throw new Error("Cannot add child to a file.");
      }
    }
  }

  const root = new FileSystemNode("root");

const folderA = new FileSystemNode("Documents");
const folderB = new FileSystemNode("Images");
const file1 = new FileSystemNode("resume.pdf", true);
const file2 = new FileSystemNode("photo.jpg", true);
const file3 = new FileSystemNode("notes.txt", true);

root.addChild(folderA);
root.addChild(folderB);
folderA.addChild(file1);
folderA.addChild(file3);
folderB.addChild(file2);

const newFile = new FileSystemNode("budget.xlsx", true);
folderA.addChild(newFile);

function listFilesAndFolders(node, path = "") {
    const currentPath = path + "/" + node.name;
  
    if (node.isFile) {
      console.log("File: " + currentPath);
    } else {
      console.log("Folder: " + currentPath);
      node.children.forEach(child => listFilesAndFolders(child, currentPath));
    }
  }
  
  listFilesAndFolders(root);
  