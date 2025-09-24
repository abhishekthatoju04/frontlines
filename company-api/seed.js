import mongoose from "mongoose";
import dotenv from "dotenv";
import Company from "./models/company.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const companies = [
  { name: "Google", industry: "Tech", location: "USA", size: 150000, founded: 1998 },
  { name: "Infosys", industry: "IT Services", location: "India", size: 250000, founded: 1981 },
  { name: "Tesla", industry: "Automobile", location: "USA", size: 120000, founded: 2003 }
];

const seedData = async () => {
  await Company.deleteMany({});
  await Company.insertMany(companies);
  console.log("Data seeded");
  mongoose.disconnect();
};

seedData();
