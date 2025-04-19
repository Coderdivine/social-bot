import './config/index';
import app from './app';
// import "./test"; // Uncomment to run the test script

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
