import publicIp from "public-ip";
import platform from "platform";
import api from "../../utils/api/index";
import { setIsSignedIn } from "../slices/auth-slice";

export const logIn =
  (username: string, password: string) => async (dispatch: any) => {
    const computerName = `${platform.name}_${await publicIp.v4()}`;

    api
      .post<{
        client_id: string;
        client_secret: string;
        code: number;
        msg: string;
      }>("/create_client", {
        phone: "+79996194339",
        client_name: computerName,
        client_uri: "no",
        grant_type: "password",
        redirect_uri: "/",
        response_type: "code",
        scope: "moderator",
        token_endpoint_auth_method: "client_secret_basic",
      })
      .then((response) => {
        localStorage.setItem("CLIENT_ID", response?.data?.client_id);
        localStorage.setItem("CLIENT_SECRET", response?.data?.client_secret);

        const body = new FormData();
        body.append("grant_type", "password");
        body.append("scope", "moderator");
        body.append("username", username);
        body.append("password", password);

        return api.post<{
          access_token: string;
          expires_in: number;
          scope: string;
          refresh_token: string;
        }>("/oauth/token", body, {
          auth: {
            username: response?.data?.client_id,
            password: response?.data?.client_secret,
          },
          headers: {
            "Content-Type": "multipart/form-towersListHardcode",
          },
        });
      })
      .then((tokens) => {
        localStorage.setItem("ACCES_TOKEN", tokens?.data?.access_token);
        localStorage.setItem("USER_NAME", username);
        localStorage.setItem("USER_PASSWORD", password);
        dispatch(setIsSignedIn(true));
      })
      .catch((err) => console.log(err));
  };

export const logOut = () => (dispatch: any) => {
  localStorage.clear();
  dispatch(setIsSignedIn(false));
};
