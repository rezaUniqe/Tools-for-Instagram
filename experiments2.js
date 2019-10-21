require("./src/tools-for-instagram.js");

//How to use Residential proxies with low data consumption example:
(async () => {
    //See example file inside logins folder
    let config = loadConfig('linkfytester');
    let config2 = loadConfig('minioffer');
    
    let account = await login(config.account, config.password, config.proxy);
    let scanner = await login(config2.account, config2.password, proxy = false);
    await setAntiBanMode(account); //← Prevent bans | Prevent default proxy ↑
    await scanAndLike(scanner, account, repeatSeconds = 120);
})();

async function scanAndLike(scanner, account, repeatSeconds) {

    console.log("Using scanner account to search");
    let posts = await recentHashtagList(scanner, "dogs");
    console.log("Using personal account to Like");
    await likePost(account, posts[0]);
    await getLikeActivityByHours(account, 24);
    
    setTimeout(async () => {await scanAndLike(scanner, account, repeatSeconds);}, 1000 * repeatSeconds);
}
