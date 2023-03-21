
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

export const getCurrencyFromNBPDate = async ({dateStart,dateEnd,code}) =>{

    console.log("dateStart "+dateStart);
    console.log("dateEnd "+dateEnd);
    console.log("code "+code);

    console.log(`http://api.nbp.pl/api/exchangerates/rates/a/${code}/${dateStart}/${dateEnd}/?format=json`);


    try{
       

        const response = await 
        fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${code}/${dateStart}/${dateEnd}/?format=json`);
        if(response.status == 200){

            const json = await response.json();
            return json.rates;
        }
        
    }
    catch(error){
        console.error(error);
    }
};

