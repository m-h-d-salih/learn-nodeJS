var addTwoPromises = async function(promise1, promise2) {
    const [a,b]=await Promise.all([promise1,promise2])
    return a+b;
};