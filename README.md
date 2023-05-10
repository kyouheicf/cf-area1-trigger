# cf-area1-trigger


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

![cf-area1-trigger](https://camo.qiitausercontent.com/3d774998891dc87bf5b0c522c33a4ddba7de0085/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3130313336312f61303133373933362d663338382d636232642d656531392d3466303436343065663732362e706e67)
