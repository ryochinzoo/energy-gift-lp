# Stage1
# dockerhubを参照して、最新のnodeのイメージを使用。ステージ2ではbuilderという名前で使用する。
FROM node:20-alpine AS builder
# 後続のコマンドが実行されるディレクトリをコンテナ内の/appに設定
WORKDIR /usr/src/app
# ローカルのpackage.jsonとpackage-lock.jsonをコンテナの作業ディレクトリにコピー
COPY package.json package-lock.json ./
# Node.jsのOpenSSL関連の問題を回避するための環境変数を設定。
# 詳細→https://builtin.com/software-engineering-perspectives/err-ossl-evp-unsupported
ENV NODE_OPTIONS=--openssl-legacy-provider
# package.jsonに定義された依存関係をインストール
RUN npm install
# 全てのソースコードをコンテナ内にコピー
COPY . ./
# アプリケーションのビルド
RUN npm run build

# Stage2
FROM nginx:alpine
# ステージ1でビルドしたソースをNginxのディレクトリにコピー
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
# listenするポートを設定
EXPOSE 80
# Nginx起動
CMD ["nginx", "-g", "daemon off;"]
