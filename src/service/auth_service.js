import { firbaseAuth, githubProvider, googleProvider } from "./firebase";
class AuthService {
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firbaseAuth.signInWithPopup(authProvider);
  }

  logout() {
    firbaseAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    firbaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      default:
        throw new Error(`new supported provider:${providerName}`);
    }
  }
}

export default AuthService;
