import signIn from "utils/signIn"
import signOut from "utils/signIn"

export function SignIn({

    ...props
}) {
    return (
        <form
            action={signIn}
        >
            <button {...props}>Sign In</button>
        </form>
    )
}

export function SignOut(props) {
    return (
        <form
            action={signOut}
            className="w-full"
        >
            <button variant="ghost" className="w-full p-0" {...props}>
                Sign Out
            </button>
        </form>
    )
}