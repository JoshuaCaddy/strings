
sampleData = 'Pub Date,Title,Authors,29/07/1954,Lord of the Rings,John Ronald Reuel Tolkien,01/08/1996,A Game of Thrones,George Raymond Martin,21/06/2003,Harry Potter and the Order of the Phoenix,Joanne Rowling'

let splitData = sampleData.split(',');
let pubDateColWidth = 13;
let titleColWidth = 31;
let authorColWidth = 23;
let space = ' ';
let equals = '=';



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

function formatDate(string){
  // first will check if date, could use external libary to be more accurate
  if(string.length <= 10 && )

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
