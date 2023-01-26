## Getting Started

How to run on local

```bash
npm run dev
# or
docker-compose up
```

Build
```bash
npm run build
```

Lint
``bash
npm run lint
```

Format code
``bash
format:fix
```

Deploy to AWS Lightsail
``bash
1. docker build -t <<image_name>> .
2. docker run -it --rm -p 3000:3000 zurich
3. aws lightsail push-container-image --region <<region>> --service-name <<lightsail container name>> --label <<any label>> --image <<image_name>>
```

Notes:
1. `docker` should exist if you are using docker-compose to run the system
2. make sure to have AWS sdk deployment : https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images 