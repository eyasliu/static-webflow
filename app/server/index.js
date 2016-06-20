import 'babel-polyfill';
import koa from 'koa';

const app = koa();

app.use(function *(){
  this.body = 'hello koa'
})

app.listen(8000)