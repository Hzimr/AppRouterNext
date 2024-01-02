export async function GithubProfile() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('https://api.github.com/users/hzimr')
  const user = await response.json()

  return (
    <div className="flex justify-between items-center py-2 px-2">
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
