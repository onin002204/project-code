// ### Problem 3: Social Media Unique Hashtags (Set)

// **Description:**  
// A social media platform needs to maintain a list of trending hashtags. Each hashtag should be counted only once regardless of how many times it appears.

// **Instructions:**  
// - Outline how you would use a Set to track trending hashtags.
// - Discuss how to add new hashtags and check for their existence.
// - Explain why a Set is beneficial in this context compared to other data structures.

// **Hint:**  
// A Set naturally filters out duplicate hashtags, ensuring each trending topic is unique. This is like a guest list where each person’s name appears only once.

const trendinghashtags = new Set();

let redundentCheck = (id) =>{
    if(trendinghashtags.has(id)){
        console.log("hashtags already exist");
    }
    else{
        trendinghashtags.add(id);
        console.log("trending hashtags added");
    }
}




redundentCheck("#ootd");
redundentCheck("#aspirin");
redundentCheck("#getthereveryfastindeed");
redundentCheck("#aspirin");
redundentCheck("#fannymagnets");
redundentCheck("#panzer");
redundentCheck("#nuttertools");
redundentCheck("#seaways");




