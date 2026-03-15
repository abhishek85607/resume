FROM node:16-slim     # base image 

WORKDIR /usr/src/app # folder in container 

COPY package*.json   
RUN npm install express@4    #copy and install package files 

COPY . .   # copy all file ( html js imgages )

EXPOSE 3000  # port 3000 open 

CMD ["node" , "app.js"]  #app start command 







