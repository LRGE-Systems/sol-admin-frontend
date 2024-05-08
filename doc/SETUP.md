RUNNING
----
```bash
brew install yarn --without-node # since you have NVM or something controlling node versions
yarn install
yarn serve --port 8080
```

BUILDING
----
```bash
yarn run build
```

DEPLOYING

```
rsync -av --delete ./dist/ sol@sol-url.com:/app/sol-admin-frontend/production/releases/YYYYMMDDHHMMSS/
```

Acessando o servidor:

```
ssh sol@sol-url.com
cd /app/sol-admin-frontend/production/
unlink current && ln -s releases/YYYYMMDDHHMMSS/ current
```
