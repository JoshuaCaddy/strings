
sampleData = 'Pub Date,Title,Authors,29/07/1954,Lord of the Rings,John Ronald Reuel Tolkien,01/08/1996,A Game of Thrones,George Raymond Martin,21/06/2003,Harry Potter and the Order of the Phoenix,Joanne Rowling'

let splitData = sampleData.split(',');
let pubDateColWidth = 13;
let titleColWidth = 31;
let authorColWidth = 23;
let space = ' ';
let equals = '=';

splitData.forEach((element, index) => {
  element = formatDate(element);
  splitData[index] = element
  return;
});

//for Each possibly add later
for(let i = 0; i < splitData.length; i += 3){
  splitData[i] = makeDataFitColumn(splitData[i], pubDateColWidth);
  splitData[i+1] = makeDataFitColumn(splitData[i+1], titleColWidth);
  splitData[i+2] = makeDataFitColumn(splitData[i+2], authorColWidth);
  if(pubDateColWidth >= splitData[i].length && titleColWidth >= splitData[i+1].length && authorColWidth >= splitData[i+2].length){
    console.log(`|${splitData[i]}|${splitData[i+1]}|${splitData[i+2]}|`)
    if(i === 0){
      console.log(`|${equals.repeat(2 + pubDateColWidth + titleColWidth + authorColWidth)}|`);
    }
  }
  else{
    console.log('error');
  }
}

function makeDataFitColumn(data, colLength){
  if (colLength < data.length){
    data = data.slice(0,(colLength-3));
    data = data + '...';
  }
  else if(colLength > data.length){
    data = data.padEnd(colLength);
  }
  // if neither then data is exactly the right size
  return data;
}

function formatDate(string){
  // first will check if date, could use external libary to be more accurate
  if(string.length <= 10 && string.indexOf('/') == 2){
    let splitString = string.split('/');
    splitString[1] = replaceMonth(splitString[1]);
    string = splitString[0] + ' ' + splitString[1] + ' ' + splitString[2];
  }
  return string;
}

function replaceMonth(month){
  switch(month){
    case ('01'):
      month = 'JAN';
      break;
    case ('02'):
      month = 'FEB';
      break;
    case ('03'):
      month = 'MAR';
      break;
    case ('04'):
      month = 'APR';
      break;  
    case ('05'):
      month = 'MAY';
      break;
    case ('06'):
      month = 'JUN';
      break;
    case ('07'):
      month = 'JUL';
      break;
    case ('08'):
      month = 'AUG';
      break;
    case ('09'):
      month = 'SEP';
      break;
    case ('10'):
      month = 'OCT';
      break;
    case ('11'):
      month = 'NOV';
      break;
    case ('12'):
      month = 'DEC';
      break;
  }
  return month;
}