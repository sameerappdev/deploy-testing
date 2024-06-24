require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const PORT_NO = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/google", (req, res) => {
  res.send("Google");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Youtube</h2>");
});

app.get("/greet", (req, res) => { 
  // get the passed query 
  const { name } = req.query; 
  res.send({ msg: `Welcome ${name}!` }); 
}); 

app.get("/demo", (req, res) => {
  res.json([
    {
      id: "001",
      name: "Aayush",
    },
    {
      id: "002",
      name: "rohit",
    },
    {
      id: "003",
      name: "Mohit",
    },
  ]);
});

app.get("/get/user", (req, res) => {
  res.json({
    login: "sameerappdev",
    id: 173440930,
    node_id: "U_kgDOClZ_og",
    avatar_url: "https://avatars.githubusercontent.com/u/173440930?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/sameerappdev",
    html_url: "https://github.com/sameerappdev",
    followers_url: "https://api.github.com/users/sameerappdev/followers",
    following_url:
      "https://api.github.com/users/sameerappdev/following{/other_user}",
    gists_url: "https://api.github.com/users/sameerappdev/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/sameerappdev/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/sameerappdev/subscriptions",
    organizations_url: "https://api.github.com/users/sameerappdev/orgs",
    repos_url: "https://api.github.com/users/sameerappdev/repos",
    events_url: "https://api.github.com/users/sameerappdev/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/sameerappdev/received_events",
    type: "User",
    site_admin: false,
    name: null,
    company: null,
    blog: "",
    location: null,
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 1,
    public_gists: 0,
    followers: 1,
    following: 0,
    created_at: "2024-06-21T06:24:21Z",
    updated_at: "2024-06-21T06:24:32Z",
  });
});

app.listen(PORT_NO, () => {
  console.log(`Example app listening on port ${port}`);
});
