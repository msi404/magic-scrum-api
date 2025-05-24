# 🪄 Magic Scrum – Task Management API

Magic Scrum is a lightweight and modular **NestJS** REST API for managing tasks in a **Scrum workflow**. It’s perfect for small teams, learning purposes, or as a starting point for building a full-featured project management tool.

---

## 🚀 Features

- 📋 **CRUD operations** for tasks, users, and sprints
- 🔁 Scrum-style task lifecycle: Backlog → In Progress → Done
- 🧱 **Modular architecture** following NestJS best practices
- 💾 Uses **SQLite** for quick setup and local development
- ⚙️ Powered by **TypeORM** for object-relational mapping
- ✅ Input validation with **class-validator**
- 🧪 Ready for unit testing with **Jest**

---

## 🧰 Tech Stack

| Layer         | Technology        |
|---------------|-------------------|
| Framework     | NestJS            |
| Database      | SQLite            |
| ORM           | TypeORM           |
| Validation    | class-validator   |
| Testing       | Jest              |

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/msi404/magic-scrum-api.git
cd magic-scrum-api
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run start:dev
```

By default, the app uses an SQLite database stored in `data/sqlite.db`.

---

## 📁 Project Structure

```
src/
├── app.module.ts
├── tasks/
│   ├── task.controller.ts
│   ├── task.service.ts
│   ├── task.entity.ts
│   └── dto/
│       └── create-task.dto.ts
```

---

## 🧪 Running Tests

```bash
npm run test
```

---

## 📘 API Docs

If you'd like to add Swagger documentation:

```bash
npm install --save @nestjs/swagger swagger-ui-express
```

Then configure it in your `main.ts`.

---

## 📝 License

MIT – feel free to use, modify, and contribute!

---

## 💡 Contributions Welcome

Found a bug or have a feature idea? Open an issue or submit a PR!