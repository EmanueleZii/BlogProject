module.exports.GetDate = function(){
    
    const date = new Date()
    
    let currentDay = date.getDay();
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();
    
    fulldata = String(currentDay+ "/"+currentMonth+"/"+currentYear);
    
    return fulldata;
}

module.exports.GetHours = function(){
    
    const Hours = new Date();
    
    let currentHour = Hours.getHours();
    let currentMinutes = Hours.getMinutes();

    return String(currentHour+":"+currentMinutes);
};
