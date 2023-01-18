interface DirectorInterface {
  workFromHome(): String;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): String;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

class Director {
  workFromHome() {
    return 'Working from home';
  }
  getCoffeeBreak() {
    return 'Getting a coffee break';
  }
  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

class Teacher {
  workFromHome() {
    return 'Working from home';
  }
  getCoffeeBreak() {
    return 'Getting a coffee break';
  }
  workTeacherTasks() {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (salary < 500 && typeof salary === 'number') {
    return new Teacher;
  } else {
    return new Director;
  }
}

function isDirector(employee: Teacher | Director) {
  if (employee instanceof Director) {
    return true;
  } else {
    return false;
  }
}

function executeWork(employee: Teacher | Director) {
  if (employee instanceof Director) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching math';
  } else if (todayClass === 'History') {
    return 'Teaching history';
  }
}
