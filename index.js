const express=require('express');
const bodyParser=require('body-parser');
const connectDB=require('./src/config/dbConfig');
const errorHandler=require('./src/middilewares/errorhandler');
const userRoutes=require('./src/routes/userRoutes');
const astrologerRoutes=require('./src/routes/astrologerRouter');
const {initializeAstrologers}=require('./src/services/flowdistributionservice');

const app=express();
const port=3000;


app.use(bodyParser.json());

app.use('/api/users',userRoutes);
app.use('/api/astrologers',astrologerRoutes);

app.use(errorHandler);


app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);

  // Connect to database
  await connectDB();

  // Initialize astrologers data
  await initializeAstrologers();
});