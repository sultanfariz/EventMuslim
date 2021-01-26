## **Show User**

Returns JSON data about a single user.

- **URL**
  /users/:id

- **Method:**
  `GET`

- **URL Params**

  **Required:**
  `id=[integer]`

- **Data Params**
  None

---

## **Register**

Register new user.

- **URL**
  /register/

- **Method:**
  `POST`

- **URL Params**
  None

- **Data Params**

  **Required:**
  `email=[email]`
  `nama_organizer=[string]`
  `nomor_hp=[string]`
  `password=[password]`
  `instagram=[string]`
  `facebook=[string]`
  `whatsapp=[string]`

---

## **Edit User**

Edit existed user data.

- **URL**
  /register/:id

- **Method:**
  `PUT`

- **URL Params**

  **Required:**
  `id=[integer]`

- **Data Params**

  **Required:**
  `email=[email]`
  `nama_organizer=[string]`
  `nomor_hp=[string]`
  `password=[password]`
  `instagram=[string]`
  `facebook=[string]`
  `whatsapp=[string]`

---

## **Delete User**

Delete existed user permanently.

- **URL**
  /register/:id

- **Method:**
  `DELETE`

- **URL Params**

  **Required:**
  `id=[integer]`

- **Data Params**
  None

---

## **Login**

Login with existed credentials.

- **URL**
  /login/

- **Method:**
  `POST`

- **URL Params**
  None

- **Data Params**

  **Required:**
  `email=[string]`
  `password=[password]`

---

## **Logout**

Logout by destroying user session.

- **URL**
  /logout/

- **Method:**
  `POST`

- **URL Params**
  None

- **Data Params**
  None

---

## **Show Acara**

Returns JSON data about an event.

- **URL**
  /events/:id

- **Method:**
  `GET`

- **URL Params**

  **Required:**
  `id=[integer]`

- **Data Params**
  None

---
