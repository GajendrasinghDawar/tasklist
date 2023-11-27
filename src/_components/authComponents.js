import { Button } from "ui/button"
import signIn from "utils/signIn"
import signOut from "utils/signIn"

export function SignIn({

    ...props
}) {
    return (
        <form
            action={signIn}
        >
            <Button {...props}>Sign In</Button>
        </form>
    )
}

export function SignOut(props) {
    return (
        <form
            action={signOut}
            className="w-full"
        >
            <Button variant="ghost" className="w-full p-0" {...props}>
                Sign Out
            </Button>
        </form>
    )
}