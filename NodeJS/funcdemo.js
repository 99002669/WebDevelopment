function showFinalCost(input)
{
    return function  calculator (costperunit)
    {
        if(input>100)
        {
            return input*costperunit*0.9;
        }
        else
        {
            return input*costperunit;
        }
    };
}
var total=showFinalCost(200);
console.log(total(20))