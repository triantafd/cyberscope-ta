import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const prefix = "/api";

const useFetchData = ({ url, params }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    setLoading(true);
    setErrors(null);

    const fetchData = async () => {
      try {
        const response = await axios.get(`${prefix}${url}`, {
          params: {
            ...params,
          },
        });
        setData(response.data);
      } catch (err) {
        console.log(err);
        setErrors(
          <div className="alert alert-danger">
            <h4>Ooops....</h4>
            <ul className="my-0">
              {err.response.data.errors.map((error) => (
                <li key={error.message}>{error.message}</li>
              ))}
            </ul>
          </div>
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, params]);

  return { data, loading, errors };
};

export default useFetchData;
