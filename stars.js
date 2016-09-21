  
    const stars= function(stn){
    
    if(stn <= 0)
    {
      return '';
    }
    
    return stars(stn-1)+'*';
  };


    const space= function(sp){
    
    if(sp <= 0)
    {
      return '';
    }
    
    return space(sp-1)+' ';
  };
    
  
  
  const triangleStars = function(n){
    
    
	if(n<=0)
  		return 0;
    
    console.log(space(n-1)+stars((x-n)*2+1));
    
    return triangleStars(n-1);
  };
  
  
  
  
 const x=7;
  triangleStars(x);
  
  