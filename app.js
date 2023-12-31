export const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2007 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

export const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]); // logs each object within the 'companies' array to the console
// }

// forEach
// companies.forEach((company) => {
//   console.log(company.name);
// });

// filter 21 & Older
// let candrink = [];

// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     candrink.push(ages[i]);
//   }
// }

// console.log(candrink);

// const canDrink = ages.filter((age) => age >= 21);
// console.log(canDrink);

// filter Retail Companies
// const retailCompanies = companies.filter(
//   (company) => company.category === "Retail"
// );

// console.log(retailCompanies);

// filter 80s Companies
// const eightiesCompanies = companies.filter((companies) => {
//   if (companies.start >= 1980 && companies.end < 1990) {
//     return true;
//   }
// });

// console.log(eightiesCompanies);

// filter Companies that lasted 10 years or more
// const lastedTenYears = companies.filter((company) => {
//   if (company.end - company.start >= 10) {
//     return true;
//   }
// });

// console.log(`${lastedTenYears[0].name} lasted 10 years or more`);

// map
// Create array of company names
// const companyNames = companies.map(
//   (company) => `${company.name} (${company.start} - ${company.end})`
// );
// console.log(companyNames);

// sort
// const sortedCompanies = companies.sort((c1, c2) => {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// console.log(sortedCompanies);

// const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);

// reduce
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const agesSum = ages.reduce((total, age) => total + age, 0);

// console.log(`The sum of all the ages in the array is: ${agesSum}`);

// Get total years for all companies using reduce
const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);

console.log(`The total years for all companies is: ${totalYears}`);
