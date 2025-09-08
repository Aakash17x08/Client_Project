#This is one of my client project which I have made

## Project info

**URL**: https://raj-c.netlify.app/



**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <url_of this repo>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
import pandas as pd

# Sample DataFrame
data = {
    'Age': ['25', '30', '35', '40'],  # Age stored as string
    'Salary': [50000.50, 60000.75, 70000.00, 80000.25]
}
df = pd.DataFrame(data)

# Convert 'Age' column from string to integer
df['Age'] = df['Age'].astype(int)

# Convert 'Salary' column from float to integer (if needed)
df['Salary'] = df['Salary'].astype(int)

print(df)
print(df.dtypes)

