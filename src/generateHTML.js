const defaultSettings = {
  lang: 'en',
  charset: 'utf-8',
  title: 'title',
  body: ''
}

const generateSettings = (defaultSettings, input) => {
  let exportSettings = defaultSettings;

  if(input !== undefined){
    Object.getOwnPropertyNames(input).map(item => {
      exportSettings[item] = input[item];
    });
  }

  return exportSettings;
}

const generateInput = argv => {
  let input = {};

  if(argv.length > 2){
    const args = argv.splice(2);
    for(let i = 0; i < args.length; i += 2){
      input[ args[i].substr(2) ] = args[i+1];
    }
  }
  console.log(input);

  return input;
}

const generateHTML = argv => {
  const settings = generateSettings(defaultSettings, generateInput(argv));

  return `<!doctype html>
<html lang=${settings.lang}> 
<head>
<meta charset=${settings.charset}>
<title>${settings.title}</title>
</head>
<body>${settings.body}</body>
</html>`;
}

module.exports = generateHTML;
