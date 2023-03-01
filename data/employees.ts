interface employee {
  firstName: string;
  lastName: string;
  role: { DE: string; EN: string };
  picture: string;
  email: string;
  linkedinURL: string;
  descriptionOne: { DE: string; EN: string };
  descriptionTwo: { DE: string; EN: string };
  active: boolean;
}

const employees: employee[] = [
  {
    firstName: "Pierrick",
    lastName: "HOUEE",
    role: {
      DE: "Gründer & CEO",
      EN: "Founder & CEO",
    },
    picture: "/images/employee-images/PierrickHOUEE.jpg",
    email: "houee.pierrick@gmail.com",
    linkedinURL: "https://www.linkedin.com/in/pierrick-hou%C3%A9e-600a6168/",
    descriptionOne: {
      DE: "Nach Erfahrungen in der Beratung bei der BCG, im Start-up-Betrieb bei Gozem, einem gescheiterten Unternehmertum bei Fabor und Pharma-Expertise bei Fact",
      EN: "After experiences in counsulting at the BCG, in start-up operations at Gozem, a failed entrepreneurship at Fabor, and pharma expertise at Fact",
    },
    descriptionTwo: {
      DE: "Pierrick brachte Transira im Jahr 2023 auf den Markt",
      EN: "Pierrick launched Transira in 2023",
    },
    active: true,
  },
];

const activeEmployees = employees.filter((employee) => employee.active);

export { activeEmployees };
export default employees;
