import Image from "next/image"

export function Profile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <Image src={user.image} alt={user.name} width={100} height={100} />
    </div>
  )
}
