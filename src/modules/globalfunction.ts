export const GetItemKey = async function(val: any){
    let value;

    await Promise.resolve().then(function () {
        value = localStorage.getItem(val);
    });
    
    return value;
}