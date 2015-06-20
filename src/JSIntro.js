
exports.Sum = function(num1, num2){
	return num1+num2;
}

exports.SumOfArray = function(arrayOfNums){
	var sum=0,i;
	for(i=0;i<arrayOfNums.length;i++)
		sum=sum+arrayOfNums[i];
	return sum;

}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var i,j,sum=0;
	for(i=0;i<arrayOfNums.length;i++)
	{
		for(j=i+1;j<arrayOfNums.length;j++)
		{
			if(arrayOfNums[i]==arrayOfNums[j])
				arrayOfNums[j]=0;
		}
	}
	for(i=0;i<arrayOfNums.length;i++)
		sum=sum+arrayOfNums[i];
	return sum;

}

exports.ReverseString = function(str){
	var i=0,temp="";
	var len;
	len=str.length;
	for(i=len-1;i>=0;i--)
	{
		temp=temp+str[i];
	}
	return temp;

}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
	
	var i=0,temp=[],j=0;
	for(i=arrayOfStrings.length-1;i>=0;i--)
	{
		temp[j]=arrayOfStrings[i];
		j=j+1;
	}
	return temp;
}