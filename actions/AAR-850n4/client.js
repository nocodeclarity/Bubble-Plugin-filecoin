function(properties, context) {


    const cid = properties.cid;
    
    var url = 'https://ipfs.io/ipfs/' + cid 
    
    window.open(url, 'blank');


}