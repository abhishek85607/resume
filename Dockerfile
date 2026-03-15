# Step 1: Base image lo (Node.js v16)
FROM node:16-slim

# Step 2: Container ke andar ek folder banao
WORKDIR /usr/src/app

# Step 3: Package files copy karo aur install karo
COPY package*.json ./
RUN npm install express@4

# Step 4: Saara code (HTML, JS, Images) copy karo
COPY . .

# Step 5: Port 3000 kholo (Container ke andar)
EXPOSE 3000

# Step 6: App ko chalu karne ki command
CMD ["node", "app.js"]



