import { useEffect, useState } from 'react';

export default function Employee() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use absolute URL in production
        const apiUrl = process.env.NODE_ENV === 'production' 
          ? `${window.location.origin}/api/hello`
          : '/api/hello';
          
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await res.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Employee Data</h1>
      <p>Name: {data?.name}</p>
    </div>
  );
}
