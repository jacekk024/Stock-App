
export const getCurrencyFromNBP = async () =>{
    try{
        const response = await 
            fetch('http://api.nbp.pl/api/exchangerates/tables/a/?format=json'); 
        const json = await response.json();
        return json[0].rates; 
    }
    catch(error){
        console.error(error);
    }
};

export const getCurrencyFromNBPDate = async (dateStart,dateEnd,code) => {
    try{
        const response = await 
            fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${code}/${dateStart}/${dateEnd}/?format=json`);
        const json = await response.json();
        return json.rates;
    }
    catch(error){
        console.error(error);
    }
};
export const getGoldTodayInfoFromNBP = async () => {
    try{
        const response = await 
            fetch(`http://api.nbp.pl/api/cenyzlota/?format=json`);
        const json = await response.json();
        return json;
    }
    catch(error){
        console.error(error);
    }
};
export const getGoldInfoFromNBPDate = async () => {
    try{
        const response = await 
            fetch(`http://api.nbp.pl/api/cenyzlota/last/255/?format=json`);
        const json = await response.json();
        return json;
    }
    catch(error){
        console.error(error);
    }
};