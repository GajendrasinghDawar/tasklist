import Image from "next/image"

export function Profile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      {user.image && <Image src={user.image} width={200} height={200} />}
    </div>
  )
}
