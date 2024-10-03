function logCurrentTime () {
    const currentTime = new Date();
    //const hours = currentTime.getHours();
    //const minutes = currentTime.getMinutes();
    //const seconds = currentTime.getSeconds();

    //console.log(`${hours}:${minutes}:${seconds}`);
    const isoString = currentTime.toISOString();
    console.log(isoString);
    

}

logCurrentTime();


