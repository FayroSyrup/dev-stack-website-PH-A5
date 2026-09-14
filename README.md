# Dev Stack Builder

A modern, responsive web application where developers can explore popular technologies and curate their own personalized development stack.

## 🔗 Links

- **Live Site:** https://dev-stack-website-ph-a5.vercel.app
- **GitHub:** https://github.com/napaSyrup-r/dev-stack-website-PH-A5

## 🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify
- Vite

## ✨ Features

- **Explore Technologies** — Browse 12+ technologies across categories like Frontend, Backend, Database, DevOps, and more with ratings and difficulty levels.
- **Build Your Stack** — Add technologies to your personal stack sidebar, remove individual items, or clear the whole stack with one click.
- **Toast Notifications** — Real-time feedback for every action — adding, duplicate attempts, removing, and clearing the stack using React Toastify.

## 📦 Installation

```bash
git clone https://github.com/napaSyrup-r/dev-stack-website-PH-A5.git
cd dev-stack-website-PH-A5
npm install
npm run dev
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TechCard.tsx
│   ├── TechGrid.tsx
│   ├── YourStack.tsx
│   └── Footer.tsx
├── types/
│   └── technology.ts
├── App.tsx
└── main.tsx
public/
└── data.json
```

## ❓ React Concepts — Q&A

**1. What is JSX, and why is it used in React?**

JSX means JavaScript XML. It lets us write HTML-like code inside JavaScript. We use JSX in React because it makes the UI code easier to read and write.

---

**2. What is the difference between props and state?**

Props are used to pass data from a parent component to a child component. Props are basically read-only.

State is data that belongs to a component and can change over time. When state changes, React updates the UI.

---

**3. What does the `useState` hook do, and where did you use it in this project?**

`useState` is used to create and manage state in a React component. When the state value changes, the component re-renders.

In this project, I used `useState` to store the technology data and the stack list, and update the UI when the data changes.

---

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

`useEffect` is used for doing some work after the component renders, like fetching data.

I used `useEffect` to load the JSON data when the component was loaded. After getting the data, I stored it in the state and showed it on the page.

---

**5. Why does every item in a `.map()` list need a unique `key` prop?**

The `key` helps React identify each item in the list. So when something changes, React can understand which item was changed, added or removed. That is why we need a unique key for every item.

---

**6. What is conditional rendering? Show one place you used it.**

Conditional rendering means showing something on the page only when a certain condition is true.

In this project, I used it in the Your Stack sidebar. When the stack is empty, it shows an empty state message. When there are items, it shows the list:

```tsx
{stack.length === 0 ? (
  <div>Your stack is empty.</div>
) : (
  <div>{stack.map(...)}</div>
)}
```

---

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

We pass data from parent to child using props. For example:

```tsx
<TechCard tech={technology} />
```

Here, the parent is passing `tech` data to the child.

To send something back from child to parent, we pass a function from the parent as a prop. Then the child calls that function and sends the data back.

Simply put — parent to child = props, child to parent = callback function through props.