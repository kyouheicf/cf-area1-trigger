# cf-contact-form


```
# Clone GitHub Repo
git clone https://github.com/kyouheicf/cf-area1-trigger && cd $(basename $_ .git)

# Create Pages project
wrangler pages project create cf-area1-trigger
```

Set your environment variables `RECEIVER_EMAIL=test@example.com` 、 `SENDER_EMAIL=sender@example.com` at UI

![image-20230309011113793](https://cdn.jsdelivr.net/gh/kyouheicf/image@master/uPic/image-20230309011113793.png)


```
# Deploy Cloudflare Pages
# wrangler pages dev . 
wrangler pages publish .

# Open your working page
open https://cf-area1-trigger-xxx.pages.dev   
```

