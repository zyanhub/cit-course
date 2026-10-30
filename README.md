<div align="center">

# CIT Learning

### A free, structured Computer Information Technology course, from first principles to modern IT skills.

[**Live Site**](https://cit-learning.vercel.app) · [**Start the Course**](https://cit-learning.vercel.app/course/cit-101) · [**Report an Issue**](https://github.com/zyanhub/cit-course/issues)

![Next.js](https://img.shields.io/badge/Next.js-App%20Router-000000?logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Auth%20%26%20Database-3FCF8E?logo=supabase&logoColor=white)
![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)

</div>

---

## Why this project exists

Good IT education should not sit behind a paywall. CIT Learning is a free, open learning platform that walks a complete beginner through the fundamentals of Computer Information Technology, one short lesson at a time, and lets learners track their own progress as they go.

It is built by **Dev Hub** in Karachi, Pakistan, for students who want to learn real skills with nothing more than a browser.

## The Curriculum

**5 chapters. 25 lessons.** Each chapter builds on the one before it.

| # | Chapter | What you will learn |
|---|---------|---------------------|
| 1 | **Introduction to IT** | What IT is, history of computers, hardware basics, software types, input/output devices |
| 2 | **Operating Systems** | What an OS does, Windows basics, Linux basics, file management, process management |
| 3 | **Internet & Networking** | How the internet works, web browsers, IP & DNS, cyber security, email & communication |
| 4 | **Programming Basics** | What programming is, variables & data types, conditions, loops, functions |
| 5 | **Advanced IT Skills** | Web development, databases, APIs, version control (Git), career paths |

## Features

**Available now**

- Structured course with 5 chapters and 25 lessons
- Responsive design that works on phones, tablets and desktops
- Email and password sign-up and login, powered by Supabase Auth
- Lesson completion tracking saved to your account
- Personal progress dashboard at `/dashboard`
- Chapters that unlock as you complete lessons
- About and Contact pages

## Roadmap

These features are planned and **not yet released**:

- [ ] Chapter quizzes (multiple choice, pass mark, unlimited retries)
- [ ] Final exam, unlocked after all chapter quizzes are passed
- [ ] Certificate of Completion with a unique certificate ID, downloadable as PDF
- [ ] Public certificate verification page (`/verify/[id]`)
- [ ] Google sign-in
- [ ] Urdu language support for lessons

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js](https://nextjs.org) (App Router) with TypeScript |
| Styling | Tailwind CSS and shadcn/ui components |
| Auth & Database | [Supabase](https://supabase.com) (Postgres with Row Level Security) |
| Hosting | [Vercel](https://vercel.com) |
| Package manager | pnpm |
| Initial scaffold | [v0](https://v0.app) |

## Project Structure

```
cit-course/
├── app/            # Routes and pages (home, course, dashboard, auth, about, contact)
├── components/     # Reusable UI components
├── hooks/          # Custom React hooks
├── lib/            # Utilities and Supabase client helpers
├── public/         # Static assets
└── styles/         # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- [pnpm](https://pnpm.io) (`npm install -g pnpm`)
- A free [Supabase](https://supabase.com) project

### 1. Clone and install

```bash
git clone https://github.com/zyanhub/cit-course.git
cd cit-course
pnpm install
```

### 2. Configure environment variables

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

You can find both values in your Supabase dashboard under **Project Settings → API**. Never commit `.env.local` or any secret key to the repository.

### 3. Set up the database

Run the following in the Supabase **SQL Editor**:

```sql
create table if not exists profiles (
  id uuid primary key references auth.users on delete cascade,
  full_name text
);

create table if not exists lesson_progress (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users on delete cascade,
  lesson_id text not null,
  completed_at timestamptz default now(),
  unique (user_id, lesson_id)
);

create table if not exists quiz_attempts (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users on delete cascade,
  chapter_id text not null,
  score int not null,
  passed boolean not null,
  created_at timestamptz default now()
);

alter table profiles enable row level security;
alter table lesson_progress enable row level security;
alter table quiz_attempts enable row level security;

create policy "own profile"  on profiles        for all using (auth.uid() = id)      with check (auth.uid() = id);
create policy "own progress" on lesson_progress for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own attempts" on quiz_attempts   for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
```

Row Level Security ensures every learner can only read and write their own data.

### 4. Run locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

The project is deployed on Vercel and redeploys automatically on every push to `main`. To deploy your own copy:

1. Fork this repository.
2. Import it into [Vercel](https://vercel.com/new).
3. Add the two Supabase environment variables in **Project Settings → Environment Variables**.
4. Deploy.

## Contributing

Contributions, bug reports and lesson improvements are welcome.

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-idea`
3. Commit your changes: `git commit -m "Add your idea"`
4. Push and open a Pull Request

If you spot an error in a lesson, please open an issue with the lesson name and the correction.

## A Note on Certificates

When released, certificates will be a **Certificate of Completion issued by CIT Learning**. They confirm that a learner finished this course on this platform. They are not issued by, or affiliated with, any university, examination board or government body.

## Author

**Dev Hub** · Karachi, Pakistan
GitHub: [@zyanhub](https://github.com/zyanhub)

---

<div align="center">

Built with care to make IT education free and accessible.

</div>
