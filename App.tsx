import React, { useCallback, useEffect } from 'react';
import Routes from './routes';
import { connectToDatabase } from './server/database/database';
import { createTables } from './server/database/createTables';

function App(): JSX.Element {
  const loadData = useCallback(async () => {
    try {
      const db = await connectToDatabase()

      createTables(db)
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData])
  return <Routes />;
}

export default App;