'use client';

const Error = ({ error }) => {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to fetch data. Please try again later!</p>
    </main>
  );
};

export default Error;
