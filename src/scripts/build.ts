// import createAdmin from "./admin";
const createAdmin = require("./admin");


const Initialise = async () => {
  try {
    const admins = await createAdmin()
    console.log("Admin Created");
  } catch (err) {
    console.log(err);
    return;
  }
  process.exit(0);
};
Initialise();
