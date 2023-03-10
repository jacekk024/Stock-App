
export const getCurrencyFromNBP = async () =>{

    try{
        const response = await 
        fetch('http://api.nbp.pl/api/exchangerates/tables/a/?format=json'); 
        if(response.status == 200){
            const json = await response.json();
            return json[0].rates;
        }
    }
    catch(error){
        console.error(error);
    }
};

export const getCurrencyFromNBPDate = async (dateStart,dateEnd) =>{

    try{
        const response = await 
        fetch(`http://api.nbp.pl/api/exchangerates/rates/a/THB/${dateStart}/${dateEnd}/?format`); 
        if(response.status == 200){
            const json = await response.json();
            return json[0].rates;
        }
    }
    catch(error){
        console.error(error);
    }
};

