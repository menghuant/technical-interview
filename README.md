# Morph Interview - Full Stack Starter Repository

Django + React starter repository for technical interviews.

## Prerequisites

- **Python** 3.10+
- **Node.js** 18+
- **PostgreSQL** 14+

---

## PostgreSQL Setup

### macOS

```bash
brew install postgresql@14
brew services start postgresql@14
createdb morph_interview
```

### Windows

1. Download and install PostgreSQL: https://www.postgresql.org/download/windows/
2. Create database:

```cmd
psql -U postgres -c "CREATE DATABASE morph_interview;"
```

### Linux

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo -u postgres createdb morph_interview
```

---

## Backend Setup

```bash
cd backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start server
python manage.py runserver
```

Backend: **http://localhost:8000**

Verify: http://localhost:8000/api/health/ should return `{"status": "ok"}`

---

## Frontend Setup

Open a new terminal:

```bash
cd frontend

npm install
npm run dev
```

Frontend: **http://localhost:5173**

---

## Project Structure

```
technical-interview/
├── backend/
│   ├── core/                    # Django settings
│   ├── inspectors/              # Inspector model (pre-built)
│   └── availability/            # Interview task: implement this app
│       ├── models.py            # Step 1: DB Schema
│       ├── serializers.py       # Step 2: API Contract
│       ├── views.py             # Step 3: Endpoint
│       └── urls.py
├── frontend/
│   └── src/components/
│       └── AvailabilityConfig/
│           └── index.jsx        # Step 4: React UI
└─── UI.png                       # UI screenshot reference
```

---

## Interview Task (30 mins)

Implement **Availability Configuration** based on `UI.png`:

| Step | Time   | Task                | File                           |
| ---- | ------ | ------------------- | ------------------------------ |
| 1    | 5 min  | Design DB Schema    | `availability/models.py`       |
| 2    | 5 min  | Design API Contract | `availability/serializers.py`  |
| 3    | 10 min | Build Endpoint      | `availability/views.py`        |
| 4    | 10 min | Build Frontend      | `AvailabilityConfig/index.jsx` |

---

## Useful Commands

```bash
# Backend
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser

# Frontend
npm run dev
npm run build
```

---

## Troubleshooting

**psycopg2 installation fails:**

```bash
# macOS
brew install libpq

# Linux
sudo apt install libpq-dev python3-dev
```

**Database connection error:**

1. Ensure PostgreSQL is running
2. Ensure `morph_interview` database exists
3. Check password in `backend/.env`

---

## Cleanup & Uninstall PostgreSQL

### Drop Database Only

```bash
dropdb morph_interview
```

### macOS

```bash
# Stop service
brew services stop postgresql@14

# Uninstall
brew uninstall postgresql@14

# Remove data (optional - deletes all databases)
rm -rf /opt/homebrew/var/postgresql@14
```

### Windows

1. Open **Control Panel** > **Programs** > **Uninstall a program**
2. Find **PostgreSQL 14** and click **Uninstall**
3. Delete data folder (optional): `C:\Program Files\PostgreSQL\14\data`

### Linux

```bash
# Stop service
sudo systemctl stop postgresql

# Uninstall
sudo apt remove --purge postgresql postgresql-contrib

# Remove data (optional - deletes all databases)
sudo rm -rf /var/lib/postgresql/
sudo rm -rf /etc/postgresql/
```
