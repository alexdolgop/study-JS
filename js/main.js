function ura () {
    console.log('Ura!!!!');
}

ura(); 

console.dir(ura); 

const post = {
    title: 'My post',
    likesQty: 5
}

const postsS = JSON.stringify(post);
JSON.parse(postsS);

