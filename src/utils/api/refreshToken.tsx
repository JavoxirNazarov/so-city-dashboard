import api from ".";

export const refreshToken = (
  afterRefreshFunc: () => any,
  refreshFailFunc: () => any,
) => {
  const clinetID = localStorage.getItem("CLIENT_ID");
  const clientSecret = localStorage.getItem("CLIENT_SECRET");
  const username = localStorage.getItem("USER_NAME");
  const password = localStorage.getItem("USER_PASSWORD");

  if (clinetID && clientSecret && username && password) {
    const body = new FormData();
    body.append("grant_type", "password");
    body.append("scope", "moderator");
    body.append("username", username);
    body.append("password", password);

    api
      .post<{
        access_token: string;
        expires_in: number;
        scope: string;
        refresh_token: string;
      }>("/oauth/token", body, {
        auth: {
          username: clinetID,
          password: clientSecret,
        },
        headers: {
          "Content-Type": "multipart/form-towersListHardcode",
        },
      })
      .then((tokens) => {
        localStorage.setItem("ACCES_TOKEN", tokens?.data?.access_token);
        afterRefreshFunc();
      })
      .catch((err) => {
        console.log(err);
        refreshFailFunc();
      });
  }
};
