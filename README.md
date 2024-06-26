# Code-Journey

The goal of this website is to make Pyhon accessible to middle and high school students through a progression system.

Notable features:
* Email verification to save progress
* Interactive python shell
* Avatar customization
* Currency (tbd)

## Technical Architecture

The backend is built using Django, and the frontend is built using React. They are connected via the Axios RESTful API.

The backend stores all user information by connecting to a MySQL database. Authentication is handled using Djoser and SimpleJWT, which provides JSON Web Token based authentication.

For styling and components, we used Tailwind CSS with FlowBite and MUI. The interactive Python shell was implemented via a third-party [trinket.io](https://trinket.io) and embedded using a `<iframe>`.

## Build instructions

To set up the backend:

Set up a MySQL database. Modify `DATABASES` in `backend/backend/settings.py` to connect to that database with the correct user and password. Start the MySQL server.

Run the following commands:
```
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python3 manage.py runserver
```

To set up the frontend:

Create a file `.env` in `frontend` with `REACT_APP_API_URL = 'http://localhost:8000`. Then run the following:
```
cd frontend
npm install
npm run build
npm start
```

## Group members

Arnold: Worked on the frontend, working on creating pages, avatar creation, and map creation.

Arvind: Worked on the frontend, particularly the Python shell

Jimmy:  Worked on the frontend, particularly on the login page, signup page, forget password page, and the draft of the home page. Also worked on the backend mainly on authentication

Rajas: Worked on the frontend, particularly the home pages and styling
