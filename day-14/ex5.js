// ### Problem 5: Company Organizational Chart (Tree)

// **Description:**  
// A company wants to model its organizational chart. The CEO is at the top, and each department head reports to the CEO, with employees reporting to the department heads.

// **Instructions:**  
// - Outline how you would use a tree structure to represent this hierarchy.
// - Describe how you would add new employees or change reporting relationships.
// - Explain how you would traverse the tree to list all employees under a particular manager.

// **Hint:**  
// Consider the organization chart like a family tree, where each node represents an employee and the edges represent reporting relationships. A pre-order or level-order traversal might be useful for listing employees by hierarchy.


class Employee {
    constructor(name, title) {
      this.name = name;
      this.title = title;
      this.directReports = []; // list of employees who report to this one
    }
  
    // Add a direct report
    addReport(employee) {
      this.directReports.push(employee);
    }
  }

  
  // CEO
const ceo = new Employee("Alice", "CEO");

// Department Heads
const headSales = new Employee("Bob", "Head of Sales");
const headEngineering = new Employee("Carol", "Head of Engineering");

ceo.addReport(headSales);
ceo.addReport(headEngineering);

// Sales team
headSales.addReport(new Employee("David", "Sales Associate"));
headSales.addReport(new Employee("Ella", "Account Manager"));

// Engineering team
const leadDev = new Employee("Frank", "Lead Developer");
headEngineering.addReport(leadDev);
leadDev.addReport(new Employee("Grace", "Frontend Developer"));
leadDev.addReport(new Employee("Hank", "Backend Developer"));


function printOrgChart(employee, indent = "") {
    console.log(`${indent}${employee.name} - ${employee.title}`);
    employee.directReports.forEach(report => printOrgChart(report, indent + "  "));
  }
  
  printOrgChart(ceo);

  
  function listTeam(manager) {
    const team = [];
  
    function dfs(emp) {
      emp.directReports.forEach(report => {
        team.push(report.name);
        dfs(report);
      });
    }
  
    dfs(manager);
    return team;
  }
  
  // Example:
  console.log("Team under Carol:", listTeam(headEngineering)); 
  