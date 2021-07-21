# GUIDE.md

## Code Contributions

#### STEP 1 Clone

Clone the project from [GitHub](https://github.com/sonaisrayel/shoppify.git)

  ``` bash
   $ git clone https://github.com/sonaisrayel/shoppify.git
   $ cd shoppify
   ```

#### Step 2: Branch

Create a new branch with issue number:

   ``` bash
   $ git checkout -b API-1
   ```

#### Step 3: Before Commit

Your code is unlikely be committed if linting is not applied.
Thus make sure you run the following before the commit:
 - `npm run lint`

#### Step 4: Commit

Make sure git knows your name and email address:

   ``` bash
   $ git config --global user.name "Your User name"
   $ git config --global user.email "your email address"
   ```
    
Add and commit:

   ``` bash
   $ git add my/changed/files
   $ git commit
   ```
    
Commit your changes following this [Commit message guidelines](#commit-message-guidelines)    

#### Step 6: Push

Push your working branch:

   ``` bash
   $ git push origin API-1
   ```

#### Step 7: Pull Request

Open a Pull Request with a clear title and description.
