# cognito-lambda-api

This project contains a basic [Amazon Web Services](https://aws.amazon.com/) (AWS) lambda function written in [Typescript](https://www.typescriptlang.org) with tests, linting and deployment configuration using AWS [Serverless Application Model](https://github.com/awslabs/serverless-application-model) (SAM).

It uses a Cognito pool for authentication to demonstrate a backend API accessed from [cognito-vue-bootstrap](https://github.com/wolfeidau/cognito-vue-bootstrap).

# Prerequisites

Install NodeJS.

```
brew install node
```

Install Typescript.

```
npm install typescript -g
```

Install Typescript Lint.

```
npm install tslint
```

Install the aws CLI.

```
brew install awscli
```

**Note:** This setup assumes mac, it is just here to illustrate the requirements and give you the gist of what is needed.

# Setup

This project is designed as a template for your project, just clone it then start developing in your favourite editor.

```
git clone https://github.com/wolfeidau/lambda-typescript-skeleton.git your-project-name
```

Then remove the git directory, and setup your new git project.

```
cd your-project-name
rm -rf .git
git init
git add . 
git commit -a "Initial import of skeleton project"
```

# Usage

Clone the lambda function, in this example we are just cloning the skeleton.

```
git clone https://github.com/wolfeidau/lambda-typescript-skeleton.git
```

Run the tests.

```
make test
```

Deploy the skeleton, this will use the `BUCKET` to stage the handler.zip file, prior to deployment with [SAM](https://github.com/awslabs/serverless-application-model).

```
AWS_PROFILE=myawsprofile \
AWS_REGION=us-west-2 \
BUCKET=somebucket.example.com \
COGNITO_POOL_ARN="arn:aws:cognito-idp:us-west-2:123123123:userpool/us-west-2_abc123123" make deploy
```

**Note:** The `Makefile` has been built to enable reproducable builds, this should mean deployments only happen when the code or dependencies are updated.

# License

This project is released under The MIT License, and is copyright Mark Wolfe.