module.exports = function solveSudoku(matrix) {
  do {
    var supMatrix=supmatrixCreation(matrix);
    supMatrix=checkRow(supMatrix);
    supMatrix=checkColumn(supMatrix);
    console.log(supMatrix);
    for(i=0;i<9;i++){
      for(j=0;j<9;j++){
        if(supMatrix[i][j][2].length==1){
          supMatrix[i][j][0]=supMatrix[i][j][2][0];
          supMatrix[i][j][1]='done';
          supMatrix[i][j][2].length=0;
          }
        }
      }
    var tempMatrix=[];
    for(i=0;i<9;i++){
      tempMatrix[i]=[];
      for(j=0;j<9;j++){
        tempMatrix[i][j]=supMatrix[i][j][0];
        }
    }
    
    console.log(tempMatrix);
    var counter=0;
    for(i=0;i<9;i++){
      for(j=0;j<9;j++){
        if(matrix[i][j]!=tempMatrix[i][j]){
          matrix[i][j]=tempMatrix[i][j];
          counter++;
          }
        }
      }
    
    console.log(counter);
    }
    while (counter>0);
    
    //Создание вспомогательной матрицы с числом, статусом и предположительными решениями
    function supmatrixCreation(matrix){
    
    var supMatrix=[];    
        
    for (i=0;i<9;i++){
      supMatrix[i]=[];
      for(j=0;j<9;j++){
        if(matrix[i][j]>0){
          supMatrix[i][j]=[matrix[i][j],'done',[]];
          }
        else  {
          supMatrix[i][j]=[0,'empty',[]];
        
        }
        }
      
      }
      return supMatrix;
    }
    //Проверка ряда
    
    function checkRow(supMatrix){
    for(i=0;i<9;i++){
    var numbers=[1,2,3,4,5,6,7,8,9];
    for(j=0;j<9;j++){
        if(supMatrix[i][j][1]=='done'){
          numbers.splice(numbers.indexOf(supMatrix[i][j][0]),1);
          }
        }
    if(numbers.length>0){    
    for(j=0;j<9;j++){
      if(supMatrix[i][j][1]=='empty'){
        supMatrix[i][j][2]=numbers;
        }
      } 
    }   
    }
    return supMatrix;
    }
    //Проверка колонки
    
    function checkColumn(supMatrix){
    for(j=0;j<9;j++){
        var numbers=[1,2,3,4,5,6,7,8,9];
            for(i=0;i<9;i++){
                if(supMatrix[i][j][1]=='done'){
                    numbers.splice(numbers.indexOf(supMatrix[i][j][0]),1);
                }  
            }
        for(i=0;i<9;i++){
          
            if(supMatrix[i][j][1]=='empty'){
              var buf=[];
                 for(k=0;k<supMatrix[i][j][2].length;k++){
                     if(numbers.indexOf(supMatrix[i][j][2][k])>=0){
                       
                      buf.push(supMatrix[i][j][2][k]);
                       }
                     
                  }
                  
                 supMatrix[i][j][2]=buf;
        
             }
      }
    }
    return supMatrix;
    }
return matrix;    
}
