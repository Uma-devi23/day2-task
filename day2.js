function countChocolates(money, costPerChocolate) {
 
    const moneyRegex = /-?\d+/;
    const costRegex = /\d+/;
    const moneyValue = parseInt(money.match(moneyRegex));
    const costValue = parseInt(costPerChocolate.match(costRegex));


    if (isNaN(moneyValue) || isNaN(costValue) || moneyValue <0 || costValue <= 0) {
      return "Invalid Input";
    }
  
    let initialChocolates = Math.floor(moneyValue / costValue);
  
   
    let wrappers = initialChocolates;
    let additionalChocolates = 0;
  
    while (wrappers >= 3) {
      let exchangedChocolates = Math.floor(wrappers / 3);
      additionalChocolates += exchangedChocolates;
      wrappers = exchangedChocolates + (wrappers % 3);
    }
  
    
    let totalChocolates = initialChocolates + additionalChocolates;
  
    return totalChocolates;
  }
  
  console.log(countChocolates("4$", "1$")); 
  console.log(countChocolates("55 $", "5$")); 
  console.log(countChocolates("I have 68$", "2$")); 
  console.log(countChocolates("I got -68$ ", "2$")); 