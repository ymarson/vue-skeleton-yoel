function formatDate(date) {
    var tmp = new Date(date);
    var mth = tmp.getMonth();
    if(mth<10) 
    {
        mth='0'+mth;
    } 
    return tmp.getDate() + '/' + mth + '/' + tmp.getFullYear();
}

export  { formatDate };