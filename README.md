  <h1>🐾 Pet Tech API</h1>
  <p>A RESTful API for managing pet care services including authentication, pet profiles, appointments, medical records, and reminders.</p>

  <h2>🚀 Technologies Used</h2>
  <ul>
    <li>Node.js + Express.js</li>
    <li>MongoDB + Mongoose</li>
    <li>JWT Authentication</li>
    <li>Nodemailer</li>
    <li>CORS + dotenv</li>
  </ul>

  <h2>📂 Folder Structure</h2>
  <pre>
project-root/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── config/
├── server.js
├── .env
└── README.md
  </pre>

  <h2>🔐 Auth Endpoints</h2>
  <table border="1" cellpadding="5">
    <tr><th>Method</th><th>Endpoint</th><th>Description</th></tr>
    <tr><td>POST</td><td>/api/auth/register</td><td>Register user</td></tr>
    <tr><td>POST</td><td>/api/auth/login</td><td>Login and get JWT</td></tr>
    <tr><td>POST</td><td>/api/auth/forgot-password</td><td>Send reset email</td></tr>
    <tr><td>POST</td><td>/api/auth/reset-password/:token</td><td>Reset password</td></tr>
    <tr><td>POST</td><td>/api/auth/logout</td><td>Logout (handled on frontend)</td></tr>
  </table>

  <h2>👤 User</h2>
  <ul><li>GET /api/users/profile – Get logged-in user profile</li></ul>

  <h2>🐶 Pets</h2>
  <ul>
    <li>POST /api/pets – Add a pet</li>
    <li>GET /api/pets – List all user pets</li>
  </ul>

  <h2>📅 Appointments</h2>
  <ul>
    <li>POST /api/appointments – Create appointment</li>
    <li>GET /api/appointments – Get user appointments</li>
  </ul>

  <h2>🩺 Medical Records</h2>
  <ul>
    <li>POST /api/medical-records – Add medical record</li>
    <li>GET /api/medical-records/:petId – Get by pet</li>
  </ul>

  <h2>💊 Prescriptions</h2>
  <ul>
    <li>POST /api/prescriptions – Add prescription</li>
    <li>GET /api/prescriptions/:petId – Get by pet</li>
  </ul>

  <h2>🔔 Reminders</h2>
  <ul>
    <li>POST /api/reminders – Add reminder</li>
    <li>GET /api/reminders – Get user reminders</li>
  </ul>

  <h2>🧪 Environment Setup</h2>
  <pre>
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
EMAIL=your_email@gmail.com
EMAIL_PASS=your_email_password
  </pre>

  <h2>🟢 Run the Server</h2>
  <pre>
npm install
npm start
  </pre>
