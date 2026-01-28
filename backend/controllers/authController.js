// backend/controllers/authController.js
const nodemailer = require("nodemailer");

const users = []; // temporary storage

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("🟢 Register API called with:", req.body); // Debug line

  if (!name || !email || !password) {
    console.log("🔴 Missing fields in registration.");
    return res.status(400).json({ message: "All fields are required" });
  }

  if (users.find((u) => u.email === email)) {
    console.log("🟠 User already exists:", email);
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser = { id: users.length + 1, name, email, password };
  users.push(newUser);

  console.log("✅ New user registered:", newUser);

  try {
    // ✅ Setup email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ganiga888@gmail.com", // your Gmail
        pass: "xkgo eacs iiye zunk", // your app password
      },
    });

    // Verify the transporter connection first
    await transporter.verify();
    console.log("📧 Gmail transporter ready to send mail");

    const mailOptions = {
      from: "ganiga888@gmail.com",
      to: email,
      subject: "Welcome to Government Schemes Portal",
      text: `Hi ${name},\n\nYou have successfully registered on the Government Schemes Portal!\n\nThank you for joining us.\n\nBest regards,\nGovernment Schemes Portal Team`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.response);
  } catch (error) {
    console.error("❌ Email error:", error);
  }

  res.status(201).json({ message: "Registered successfully!", user: newUser });
};

module.exports = { registerUser };
