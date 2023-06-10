
export const CalculateTime = () => {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear(); 
    
    var ddPast =  String(new Date(new Date().setDate(today.getDate() - 30)).getDay()).padStart(2, '0');
    var mmPast = String(new Date(new Date().setDate(today.getDate() - 30)).getMonth()).padStart(2, '0');
    var yyyyPast = new Date(new Date().setDate(today.getDate() - 30)).getFullYear();
  
    var priorDate = yyyyPast + '-' + mmPast + '-'+ ddPast;
    today = yyyy + '-' + mm + '-' + dd;

    return ([today,priorDate]);
  };


