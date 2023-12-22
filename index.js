function Get() {

    return fetch('https://apigenerator.dronahq.com/api/LC9rhgnc/crud02')
      .then((response) => response.json())
      .then((data) => console.log(data));
  
  }