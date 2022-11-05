# Download these plugins for ease of working

- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Clone this repo and so the following

- check if there is a branch with your group/name in the repo

![image showing how to check if branch exists](./markdown-assets/branch.gif)

if it doesn't contact a maintainer and tell them about this issue.

- install all packages

```sh
    npm i --include-dev
```

- do the following command when doing the first push


setting orgin and creating the branch
```sh
    git checkout -b your-username
    git remote add origin https://github.com/Stacs-nssce/Stacs-website/tree/your-branch-name
```

adding yourself into the contributors file
```sh
    echo "- [your name](your github profile link)" >> contributors.md
```

staging and committing the changes you made to the repo
```sh
    npm run add
    git commit -m "initial push"
```

Setting the push orgin to the branch you created
```sh
    git push --set-upstream origin {your username}
```

This does not need to be done after the above steps, but instead after you've made more changes.
After you've completed all these steps you can continue to push updates normally after making changes with
```sh
    npm run add
    git commit -m "Information about your commit"
    git push
```

as your origin is set to your branch now!!

don't forget to make a pull request after pushing the new changes

## If you are forking the repo

[Click me to fork this repo](https://github.com/Stacs-nssce/Stacs-website/fork)

- Create a new branch in your forked repo
![image showing how to cerate a branch onl github](./markdown-assets/create-new-branch.gif)

- Then do the follwoing steps locally

Go to a folder of your choice and do the following
```sh
    git clone https://www.github.com/{your-name-here}/Stacs-website
    cd Stacs-website
    npm i --include=dev
    git checkout -b your-name-here
    git remote add origin https://github.com/Stacs-nssce/Stacs-website/tree/{your-name-here}
    echo "- [your name](your github profile link)" >> contributors.md
    npm run add
    git commit -m  "Initial commit"
    git push --set-upstream origin {your-name-here}
```

- Create a pull request
[click to go to the pull request menu](https://github.com/Stacs-nssce/Stacs-website/pulls)

![image showing how to create a pull request](./markdown-assets/create-new-branch.gif)
