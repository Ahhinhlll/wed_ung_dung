const express = require("express");
const sequelize = require("./config/database");
const setupSwagger = require("./config/swagger");
const danhMucRoutes = require("./routes/danhMucRoutes");
const sanPhamRoutes = require("./routes/sanPhamRoutes");
const vaiTroRoutes = require("./routes/vaiTroRoutes");
const nguoiDungRoutes = require("./routes/nguoiDungRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());
app.use("/api", danhMucRoutes);
app.use("/api", sanPhamRoutes);
app.use("/api", vaiTroRoutes);
app.use("/api", nguoiDungRoutes);
app.use("/api", authRoutes);

// Thiết lập Swagger
setupSwagger(app);

sequelize
  .sync()
  .then(() => {
    console.log("Database connected and synced.");
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
