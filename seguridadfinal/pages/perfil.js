import LoginLogout from "../src/components/LoginLogout";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export const getServerSideProps = withPageAuthRequired();

export default function Profile({ user }) {
    console.log(user);
    return (
        <div>
            <h1>Profile</h1>
            <p>Nombre: {user && user.name}</p>
            <p>Email: {user && user.email}</p>
            {user && <img src={user.picture} alt="User Picture" />}
            <LoginLogout />
        </div>
    );
}