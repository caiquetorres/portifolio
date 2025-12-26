docker build \
    -f Dockerfile . \
    -t us-central1-docker.pkg.dev/vaner-44ecc/portifolio/portifolio-web:latest \
    --platform linux/amd64

docker push us-central1-docker.pkg.dev/vaner-44ecc/portifolio/portifolio-web:latest

gcloud run deploy portifolio-web \
    --project vaner-44ecc \
    --image us-central1-docker.pkg.dev/vaner-44ecc/portifolio/portifolio-web:latest \
    --region us-central1 \
    --allow-unauthenticated
