const todos = [
  {
    id: '1',

    title: 'Take out trash',

    dueDate: '2025-01-25',

    completed: true,
    employeeId: '1',
  },

  {
    id: '2',

    title: 'Buy groceries',
    dueDate: '2025-01-26',

    completed: false,
    employeeId: '2',
  },

  {
    id: '3',

    title: 'Do laundry',
    dueDate: '2025-01-27',

    completed: false,
    employeeId: '3',
  },

  {
    id: '4',

    title: 'Pay bills',
    dueDate: '2025-01-28',

    completed: true,
    employeeId: '4',
  },
];

const employees = [
  {
    id: '1',

    name: 'John Doe',

    email: 'johndoe@example.com',
  },

  {
    id: '2',

    name: 'Jane Doe',

    email: 'janedoe@example.com',
  },

  {
    id: '3',

    name: 'Jim Smith',

    email: 'jimsmith@example.com',
  },
  {
    id: '4',

    name: 'Jame Smith',

    email: 'jamesmith@example.com',
  },
];

module.exports = { todos, employees };
