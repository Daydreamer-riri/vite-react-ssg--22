import { useLoaderData } from "react-router-dom";

export function Component() {
  const data = useLoaderData() as string

  return (
    <pre style={{ textAlign: 'start' }}>{data}</pre>
  )
}

export async function loader() {
  const fs = await import('fs')
  const packageJson = fs.readFileSync('./package.json', 'utf-8')
  return packageJson
}