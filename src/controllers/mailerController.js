const { json } = require('express/lib/response')
const  { transporter } = require('./../config/mailer')



const sendGeneralReport = async (req, res) => {
    try {
        const body = req.body
        console.log('body-back ',body)
        let info = await transporter.sendMail({
            from: '"Admin General Report" <memory.shoot22@gmail.com>', // sender address
            to: "memory.shoot22@gmail.com", 
            subject: "Check new general report", 
            text: "Hello world?", 
            html: `
            <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .footer-container{
      display: flex;
      flex-wrap: wrap;
      background-color: black;
      padding: 10px;
      align-items: center;
      width: 100%;
      color: white;
    }
    .little-containers{
      padding: 15px;  
      background-color: #b2f0f8c0;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }
  </style>
</head>
<body>
  <header class="header-container">
    <div class="squere-main-container">
      <div class="little-containers">
        <h1>General admin report</h1>
        <h3>Ventas: ${body.sales}</h3>
        <h3>Usuarios: ${body.users}</h3>
        <h3>Productos: ${body.products}</h3>
        <h3>Visitas hoy: ${body.visit.today}</h3>
        <h3>Visitas totales: ${body.visit.total}</h3>
      </div>
    </div>
    <footer class="footer-container">
    <h2>MemoryShoot | Todos los derechos reservados</h2>
    </footer>
  </header>
</body>
</html>
` 
        })
        res.json(info)
    } catch (error) {
        res.status(400).json('No completed', error)
    }
}

const sendSalesReport = async (req, res) => {
  try {
    const body = req.body
    console.log('body-back ',body)
    let info = await transporter.sendMail({
        from: '"Admin General Report" <memory.shoot22@gmail.com>', // sender address
        to: "memory.shoot22@gmail.com", 
        subject: "Check sales report", 
        text: "Hello world?", 
        html: `
        <!DOCTYPE html>
          <html lang="en">
          <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <style>
          .footer-container{
            display: flex;
            flex-wrap: wrap;
            background-color: black;
            padding: 10px;
            align-items: center;
            width: 100%;
            color: white;
          }
          .little-containers{
            padding: 15px;  
            background-color: #b2f0f8c0;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
          }
          </style>
          </head>
          <body>
          <header class="header-container">
          <div class="squere-main-container">
            <div class="little-containers">
              <h1>Sales Admin Report</h1>
              <h3>N° ventas totales: ${body.totalSales}</h3>
              <h3>Total dinero de ventas: ${body.totalIncome}</h3>
              <h3>Total de ganancias: ${body.totalNeto}</h3>
              <h3>Total Gastos: ${body.totalSpent}</h3>
              <h3>Promedio de ventas: ${body.totalAvarage}</h3>
            </div>
          </div>
          <footer class="footer-container">
          <h2>MemoryShoot | Todos los derechos reservados</h2>
          </footer>
          </header>
          </body>
        </html>
        ` 
    })
    res.json(info)
} catch (error) {
    res.status(400).json('No completed', error)
}
}


module.exports = {
  sendGeneralReport,
  sendSalesReport
}