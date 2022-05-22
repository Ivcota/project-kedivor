FROM node

COPY . .

RUN yarn 

RUN npx prisma db push

EXPOSE 4000:4000

CMD [ "yarn", "dev" ]