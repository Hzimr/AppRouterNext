import { Suspense } from 'react'
// Suspense API component, loanding.tsx Global
import { GithubProfile } from './components/github-profile'
import { LongWaitComponent } from './components/long-wait-component'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
        laudantium at in quasi recusandae deleniti, delectus libero, sit earum
        voluptas totam alias voluptates praesentium. Error commodi harum ducimus
        ex velit?
      </p>
      <Suspense fallback={<p>Carregando LongWaitComponent</p>}>
        <LongWaitComponent />
      </Suspense>
      <Suspense fallback={<p>Carregando GithubProfile</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
