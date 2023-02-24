interface employee {
  firstName: string;
  lastName: string;
  role: string;
  picture: string;
  email: string;
  linkedinURL: string;
  active: boolean;
}

const employees: employee[] = [
  {
    firstName: "Pierrick",
    lastName: "HOUEE",
    role: "Founder & CEO",
    picture: "/images/employee-images/PierrickHOUEE.jpg",
    email: "houee.pierrick@gmail.com",
    linkedinURL: "https://www.linkedin.com/in/pierrick-hou%C3%A9e-600a6168/",
    active: true,
  },
];

const activeEmployees = employees.filter((employee) => employee.active);

export { activeEmployees };
export default employees;
