import express from 'express';
import history from 'connect-history-api-fallback';
const app = express();
app.use(history()); // 这里千万要注意，要在static静态资源上面
app.use(express.static('dist'));

app.listen(8080, () => console.log('Server running on port 8080'));
