import express from "express";
import mogan from 'morgan'

const app = express();
import productRoutes from './routes/products.routes'

// settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(mogan('dev'))

app.use(productRoutes)

// init the app
app.listen(app.get("port"));

console.log("Server on port", app.get("port"));
