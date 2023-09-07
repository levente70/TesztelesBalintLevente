const haromszog = {
    egyenlotlenseg: (a, b, c) =>{
       if (( (a + b) > c ) && (( (a + c) > b ) && ( (b + c) > a ) ))return true;
       else  return false;
    },

    terulet: (a, ma)=>{
        return a*ma/2;
    },
    kerulet: (a,b,c)=>{
        return a+b+c;
    }
   
    
   
   }
   
   module.exports = haromszog