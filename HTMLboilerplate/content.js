const htmlText = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/main.styles.css">
</head>

<body>
    <h3>Welcome To HTML Boilerplate</h3> 
    <script type="text/javascript" src="js/main.script.js"></script>
</body>

</html>
`;

const cssText = `
    body{
        background-color: aqua;
        text-align : center;
    }
`;

const jsText = 'console.log("Hello World");';


module.exports = {
    htmlContent : htmlText,
    jsContent : jsText,
    cssContent : cssText
};
