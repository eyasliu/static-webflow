import 'babel-polyfill';
import './utils/globals';
import koa from 'koa';
import indexPage from './api/polices/indexPage';

const app = koa();
app.use(indexPage)
app.use(function *(){
  this.body = 'hello koa'
})

app.listen(8000)