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
