export interface Auth0Response {
  accessToken: string;
  idToken: string;
  refreshToken?: string | undefined;
  expiresIn: number;
  scope: string;
  tokenType: string;
  email: string;
}
