const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const Customer = require("./models/Customer");

const customers = [
  {
    name: "Ali Hassan",
    email: "ali@gmail.com",
    phone: "0301-1234567",
    company: "TechCorp",
    status: "Active",
    address: "Lahore",
    notes: "VIP client",
  },
  {
    name: "Sara Khan",
    email: "sara@gmail.com",
    phone: "0302-2345678",
    company: "DesignHub",
    status: "Lead",
    address: "Karachi",
    notes: "Interested in services",
  },
  {
    name: "Ahmed Raza",
    email: "ahmed@gmail.com",
    phone: "0303-3456789",
    company: "BuildIt",
    status: "Active",
    address: "Islamabad",
    notes: "Regular client",
  },
  {
    name: "Fatima Malik",
    email: "fatima@gmail.com",
    phone: "0304-4567890",
    company: "SoftSol",
    status: "Inactive",
    address: "Peshawar",
    notes: "Old client",
  },
  {
    name: "Usman Ali",
    email: "usman@gmail.com",
    phone: "0305-5678901",
    company: "NetWork",
    status: "Lead",
    address: "Multan",
    notes: "New lead",
  },
  {
    name: "Ayesha Tariq",
    email: "ayesha@gmail.com",
    phone: "0306-6789012",
    company: "WebZone",
    status: "Active",
    address: "Lahore",
    notes: "Premium client",
  },
  {
    name: "Bilal Saeed",
    email: "bilal@gmail.com",
    phone: "0307-7890123",
    company: "DataSys",
    status: "Lead",
    address: "Karachi",
    notes: "Follow up needed",
  },
  {
    name: "Hina Qureshi",
    email: "hina@gmail.com",
    phone: "0308-8901234",
    company: "CloudNet",
    status: "Active",
    address: "Islamabad",
    notes: "Happy client",
  },
  {
    name: "Zain Afzal",
    email: "zain@gmail.com",
    phone: "0309-9012345",
    company: "AppMakers",
    status: "Inactive",
    address: "Faisalabad",
    notes: "Contract ended",
  },
  {
    name: "Nadia Hussain",
    email: "nadia@gmail.com",
    phone: "0310-0123456",
    company: "PixelStudio",
    status: "Active",
    address: "Lahore",
    notes: "Ongoing project",
  },
  {
    name: "Kamran Iqbal",
    email: "kamran@gmail.com",
    phone: "0311-1234560",
    company: "DevHouse",
    status: "Lead",
    address: "Karachi",
    notes: "Sent proposal",
  },
  {
    name: "Sana Mirza",
    email: "sana@gmail.com",
    phone: "0312-2345670",
    company: "EduTech",
    status: "Active",
    address: "Rawalpindi",
    notes: "Long term client",
  },
  {
    name: "Tariq Mehmood",
    email: "tariq@gmail.com",
    phone: "0313-3456780",
    company: "FinSmart",
    status: "Inactive",
    address: "Sialkot",
    notes: "Paused services",
  },
  {
    name: "Rabia Nawaz",
    email: "rabia@gmail.com",
    phone: "0314-4567890",
    company: "HealthPlus",
    status: "Lead",
    address: "Gujranwala",
    notes: "Demo scheduled",
  },
  {
    name: "Hamza Sheikh",
    email: "hamza@gmail.com",
    phone: "0315-5678900",
    company: "LogiTech",
    status: "Active",
    address: "Lahore",
    notes: "Best client",
  },
];

const seed = async () => {
  await Customer.deleteMany();
  await Customer.insertMany(customers);
  console.log("15 customers added successfully!");
  mongoose.disconnect();
};

seed();
