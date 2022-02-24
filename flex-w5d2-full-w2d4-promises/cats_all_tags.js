const request = require('request-promise-native');
const catsPromise = request('https://cataas.com/api/tags');
catsPromise.then((body) => {
    const tags = JSON.parse(body);
    let count = 0;
    const tagRequests = [];
    for (const tag of tags) {
        if (count > 5) break
        tagRequests.push(request(`https://cataas.com/api/cats?tag=${tag}`));
        count++;
    }
    Promise.all(tagRequests).then(values => {
        allCatsList = [];
        console.log('all tags fetched', values, values.length);
        for (const value of values) {
            // console.log(value);
            allCatsList = [...allCatsList, ...value];
        }
        console.log("number of cats", allCatsList.length)
    })
    
});
