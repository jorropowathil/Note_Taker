
const port = process.env.PORT || 3001;
// Require express
const app = express();

// Require Routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// More Routes

// Server start and listen 
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));