import Port from "../components/Port";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <Port selected />
      <Port />
    </div>
  )
}
