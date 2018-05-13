#from คือไปดึง base ของคนอื่นที่ใช้ในการ config มาใช้
#เช่นมี nginx มารองรับทำ reverse proxy สำหรับ Node เอง
FROM finizco/nginx-node:latest
#คือเลือกไฟล์เราแล้วแอด source งานเรา  dest ไปเก็บใน folder ของ
#docker vm ที่เราดึงมาจาก base นั่นเองเสมือนว่าสร้างเครื่องมาแล้วเอางาน
#งานของเราเข้าไปเก็บในที่จุดนั้นในเครื่อง ถ้าไม่มีก็สร้างใหม่
#docker exec -it [containername] /bin/bash เข้าไปข้างใน docker container
#โดยเราเพิ่มคำสั่งในฝังเราเองเช่น npm install, npm run dev เป็นต้นหรือ yarn เพื่อลดความยากลำบากกับคนเขียน dokcer iamge
ADD * /app
WORKDIR /app
RUN yarn
