const page = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <App></App>
  <script src="http://localhost:${config.clientPort}/assets/client.js"></script>
</body>
</html>
`
export default function *(){
  const {request} = this;
  if(request.url === '/'){
    this.body = page;
  }
}