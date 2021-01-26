FROM node:14-alpine

# Copy application files
COPY ./build /usr/src/app
WORKDIR /usr/src/app

# Install Yarn and Node.js dependencies
RUN npm install

CMD [ "node", "server.js" ]
