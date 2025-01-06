const employees = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Task 1",
        description: "Complete the monthly report.",
        date: "2024-01-05",
        category: "Reporting",
        active: true,
        completed: false,
        newTask: true,
        failed: false
      },
      {
        title: "Task 2",
        description: "Prepare slides for the client meeting.",
        date: "2024-01-10",
        category: "Presentation",
        active: true,
        completed: false,
        newTask: true,
        failed: false
      },
      {
        title: "Task 3",
        description: "Submit the weekly progress update.",
        date: "2024-01-07",
        category: "Update",
        active: true,
        completed: true,
        newTask: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    name: "Diya Kapoor",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 2
    },
    tasks: [
      {
        title: "Task 1",
        description: "Organize team-building activity.",
        date: "2024-02-01",
        category: "Teamwork",
        active: false,
        completed: true,
        newTask: false,
        failed: false
      },
      {
        title: "Task 2",
        description: "Fix bugs in the project module.",
        date: "2024-01-15",
        category: "Development",
        active: true,
        completed: false,
        newTask: true,
        failed: true
      },
      {
        title: "Task 3",
        description: "Test the new API endpoints.",
        date: "2024-01-20",
        category: "Testing",
        active: true,
        completed: false,
        newTask: true,
        failed: true
      }
    ]
  },
  {
    id: 3,
    name: "Rohan Iyer",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Task 1",
        description: "Update software documentation.",
        date: "2024-01-18",
        category: "Documentation",
        active: false,
        completed: true,
        newTask: false,
        failed: false
      },
      {
        title: "Task 2",
        description: "Resolve high-priority tickets.",
        date: "2024-01-12",
        category: "Support",
        active: true,
        completed: false,
        newTask: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    name: "Sneha Patel",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        title: "Task 1",
        description: "Plan the Q1 budget.",
        date: "2024-01-22",
        category: "Finance",
        active: true,
        completed: false,
        newTask: true,
        failed: false
      },
      {
        title: "Task 2",
        description: "Create a training schedule for new hires.",
        date: "2024-01-25",
        category: "Training",
        active: true,
        completed: false,
        newTask: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    name: "Ananya Deshmukh",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 3,
      newTask: 3,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        title: "Task 1",
        description: "Draft marketing strategies for Q2.",
        date: "2024-01-30",
        category: "Marketing",
        active: true,
        completed: false,
        newTask: true,
        failed: false
      },
      {
        title: "Task 2",
        description: "Analyze competitors' performance.",
        date: "2024-01-29",
        category: "Research",
        active: true,
        completed: false,
        newTask: true,
        failed: false
      },
      {
        title: "Task 3",
        description: "Prepare monthly social media calendar.",
        date: "2024-01-27",
        category: "Social Media",
        active: true,
        completed: false,
        newTask: true,
        failed: false
      }
    ]
  }
];


  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];

export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return {employees, admin}
}