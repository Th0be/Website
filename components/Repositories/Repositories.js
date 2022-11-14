import { useEffect, useState } from "react";
import { dataFetch } from "hooks/dataFetch";
import Repository from "./Repository";
import DataFetchProcess from "components/DataFetchProcess/DataFetchProcess.js";
import styles from "./styles/Repositories.module.sass";

export default function Repositories() {
  const [repositories, setRepositories] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const url = process.env.NEXT_PUBLIC_GITHUB_API;

  useEffect(() => {
    dataFetch(setError, setLoading, setRepositories, url);
  }, []);

  return (
    <>
      <DataFetchProcess error={error} loading={loading} />
      {!error && !loading && (
        <div className={styles.repositories}>
          {repositories &&
            repositories.map((repository) => (
              <>
                <Repository
                  name={repository.name}
                  url={repository.html_url}
                  description={repository.description}
                  lastUpdate={repository.pushed_at}
                />
              </>
            ))}
        </div>
      )}
    </>
  );
}
