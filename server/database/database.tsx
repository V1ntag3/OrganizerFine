import {
  enablePromise,
  openDatabase,
} from "react-native-sqlite-storage"

enablePromise(true)

export const connectToDatabase = async () => {
  return openDatabase(
    { name: "organizer3.db", location: "default" },
    () => { },
    (error) => {
      console.error(error)
      throw Error("Could not connect to database")
    }
  )
}